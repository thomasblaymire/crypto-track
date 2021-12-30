import React, { useEffect } from 'react';
import { Header } from './header';
import { Layout } from './layout';
import { API_URL } from '../constants';
import { useFetch } from '../hooks/fetch';
import { CryptoTable } from '../components/CryptoTable';

interface HomeProps {}

const navItems = [
  {
    id: '1',
    item: 'Cryptocurrencies',
    url: '/',
  },
  {
    id: '2',
    item: 'Markets',
    url: '/markets',
  },
];

const stats = [
  {
    title: 'Cryptocurrencys',
    value: 1592,
  },
  {
    title: 'Markets',
    value: 10271,
  },
  {
    title: 'Market Cap',
    value: 33456544334,
  },
  {
    title: 'Volume 24H',
    value: 12223245223,
  },
  {
    title: 'BTC Dominance',
    value: 387,
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
      <Header navItems={navItems} stats={stats} />
      {data && <CryptoTable data={data} />}
    </Layout>
  );
};
