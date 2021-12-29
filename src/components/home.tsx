import React, { useEffect } from 'react';
import { Header } from './header';
import { Layout } from './layout';
import { API_URL } from '../constants';
import { useFetch } from '../hooks/fetch';
import { CryptoTable } from '../components/CryptoTable';

interface HomeProps {}

const nav = [
  {
    'id:': '1',
    item: 'Home',
    url: '/',
  },
];

const stats = [
  {
    title: 'Cryptocurrencys',
    value: '1592',
  },
  {
    title: 'Markets',
    value: '10271',
  },
  {
    title: 'Market Cap',
    value: '$33,456,544,334',
  },
  {
    title: 'Volume 24H',
    value: '$12,223,245,223',
  },
  {
    title: 'BTC Dominance',
    value: '38.7%',
  },
];

export const Home = ({}: HomeProps): JSX.Element => {
  const { data }: any = useFetch({
    url: API_URL,
    params: {
      headers: {
        'X-CMC_PRO_API_KEY': '84688968-53a0-4a2e-88f0-e7cfa246c8a6',
      },
    },
  });

  return (
    <Layout>
      <Header navigation={nav} stats={stats} />
      {data && <CryptoTable data={data} />}
    </Layout>
  );
};
