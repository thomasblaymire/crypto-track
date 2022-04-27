// This file contains all of the Front End data for the application, some will eventually be Backend driven!
import React from 'react';
import CoinIcon from './assets/icons/coins.svg';
import StoreIcon from './assets/icons/store.svg';
import NewsIcon from './assets/icons/news.svg';
import PeopleIcon from './assets/icons/people.svg';
import ToolsIcon from './assets/icons/toolbox.svg';

import AudIcon from './assets/flags/AUD.svg';
import GbpIcon from './assets/flags/GBP.svg';
import CadIcon from './assets/flags/CAD.svg';
import CnyIcon from './assets/flags/CNY.svg';
import EurIcon from './assets/flags/EUR.svg';
import UsdIcon from './assets/flags/USD.svg';
import BrlIcon from './assets/flags/BRL.svg';

const cryptoHeadingColumns = {
  name: 'Name',
  price: 'Price',
  priceChange24: '24h%',
  priceChange48: '48h%',
  marketCap: 'Market Cap',
  volume: 'Volume (24h)',
};

const currencies = [
  {
    id: 'aud',
    code: 'AUD',
    title: 'Australian Dollar',
    icon: <AudIcon />,
  },
  {
    id: 'brl',
    code: 'BRL',
    title: 'Brazilian Real',
    icon: <BrlIcon />,
  },
  {
    id: 'gbp',
    code: 'GBP',
    title: 'Pound Sterling',
    icon: <GbpIcon />,
  },
  {
    id: 'cad',
    code: 'CAD',
    title: 'Canadian Dollar',
    icon: <CadIcon />,
  },
  {
    id: 'cny',
    code: 'CNY',
    title: 'Chinese Yuan',
    icon: <CnyIcon />,
  },
  {
    id: 'eur',
    code: 'EUR',
    title: 'Euro',
    icon: <EurIcon />,
  },
  {
    id: 'usd',
    code: 'USD',
    title: 'United States Dollar',
    icon: <UsdIcon />,
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
