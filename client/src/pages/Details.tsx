import React from 'react';
import parse from 'html-react-parser';
import styled from 'styled-components';
import { Layout } from '../components/UI/Layout';
import { Loading } from '../components/UI/Loading';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { SingleCoin } from '../types/types';
import { Graph } from '../components/UI/Graph';
import { Card } from '@components/UI/Card';

const StyledCryptoSection = styled.section`
  padding: 7rem 0;

  h2 {
    color: white;
    font-size: 3rem;
  }

  p {
    font-size: 1.5rem;
    color: white;
    margin: 0;
  }
`;

const StyledCardRow = styled.div`
  box-shadow: rgb(0 0 0 / 8%) 0px 0px 15px, rgb(0 0 0 / 5%) 0px 0px 4px;
  display: flex;
  width: 100%;
  margin-bottom: 10rem;
`;

const StyledCrypto = styled.div`
  display: flex;
  padding-bottom: 5rem;
  align-items: center;

  img {
    width: 100px;
    height: 100px;
    margin-right: 5rem;
  }
`;

const StyledLeftSection = styled.aside`
  max-width: 930px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const StyledCryptoInformation = styled.div`
  font-size: 1.5rem;
  line-height: 35px;
  a {
    text-decoration: none;
    color: blue;
    color: #fff;
    text-decoration: none;
    &:hover {
      cursor: default;
    }
  }
`;

const StyledSection = styled.section``;

interface FetchSingleCoinInterface {
  data?: SingleCoin;
  isLoading?: boolean;
  isError?: boolean;
  error?: string;
  isFetching: boolean;
}

const StyledLineGraph = styled(Graph)`
  margin-bottom: 7rem;
`;

export const Details = (): JSX.Element => {
  const { crypto } = useParams();
  const getSingleCoinQueryString = (crypto?: string): string =>
    `coins/${crypto}?localization=false&tickers=false&market_data=false&developer_data=false&sparkline=false`;

  const { data, isLoading }: FetchSingleCoinInterface = useQuery(
    ['crypto', crypto],
    async () => {
      const response = await fetch(
        `${process.env.COINGEKO_API}/${getSingleCoinQueryString(crypto)}`
      );

      const data = await response.json();
      return data;
    },
    {
      retry: 5,
    }
  );

  const fetchChartData = async () => {
    //'//api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&market_data=false&developer_data=false&sparkline=false';
    //api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=gbp&days=1&interval=hourly
    const response = await fetch(
      `${process.env.COINGEKO_API}/coins/bitcoin/market_chart?vs_currency=gbp&days=1&interval=hourly`
    );

    const data = await response.json();
    return data;
  };

  const chartData = useQuery('teams', fetchChartData);

  return (
    <Layout>
      {isLoading && <Loading position="center" />}
      {data && (
        <StyledCryptoSection>
          <StyledCrypto>
            <img src={data.image.large} />
            <h2>{data.name}</h2>
          </StyledCrypto>

          <StyledCardRow>
            <Card
              title="Market Cap"
              icon="ICON URL"
              meta="$275,890,432"
              change="UP 0.05%"
            />
            <Card
              title="Market Cap"
              icon="ICON URL"
              meta="$275,890,432"
              change="UP 0.05%"
            />
            <Card
              title="Market Cap"
              icon="ICON URL"
              meta="$275,890,432"
              change="UP 0.05%"
            />
            <Card
              title="Market Cap"
              icon="ICON URL"
              meta="$275,890,432"
              change="UP 0.05%"
            />
          </StyledCardRow>

          <StyledLeftSection>
            <StyledSection>
              <StyledLineGraph data={chartData.data?.prices} />
            </StyledSection>

            <StyledSection>
              <StyledCryptoInformation>
                {parse(data.description.en)}
              </StyledCryptoInformation>
              {/* {data.description.en} */}
            </StyledSection>
          </StyledLeftSection>
        </StyledCryptoSection>
      )}
    </Layout>
  );
};
