import React from 'react';
import CoinIcon from './assets/icons/coins.svg';
import StoreIcon from './assets/icons/store.svg';
import NewsIcon from './assets/icons/news.svg';
import PeopleIcon from './assets/icons/people.svg';
import ToolsIcon from './assets/icons/toolbox.svg';

const cryptoHeadingColumns = {
  name: 'Name',
  price: 'Price',
  priceChange24: '24h%',
  priceChange48: '48h%',
  marketCap: 'Market Cap',
  volume: 'Volume (24h)',
};

const currencies = [
  ['gbp', 'GBP'],
  ['aud', 'AUD'],
  ['usd', 'USD'],
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

const navItems = [
  {
    id: 1,
    title: 'Cryptocurrencies',
    url: '/',
    icon: <CoinIcon />,
  },
  {
    id: 2,
    title: 'Markets',
    url: '/markets',
    icon: <StoreIcon />,
  },
  {
    id: 3,
    title: 'News',
    url: '/news',
    icon: <NewsIcon />,
  },
  {
    id: 4,
    title: 'Influencers',
    url: '/influencers',
    icon: <PeopleIcon />,
  },
  {
    id: 5,
    title: 'Tools',
    url: '/tools',
    icon: <ToolsIcon />,
  },
];

export { cryptoHeadingColumns, currencies, stats, navItems };
