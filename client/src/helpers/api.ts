// The idea of this file is to provide a centralized set of helpers that we can all when we want to pass data to a specific endpoint.

const SINGLE_COIN_QUERY_STRING = (crypto?: string): string =>
  `coins/${crypto}?localization=false&tickers=false&market_data=false&developer_data=false&sparkline=false`;

const ALL_COIN_QUERY_STRING = (currency?: string, page?: number): string => {
  // Currency will eventually be stored on userData with backend, temporarily lets use localStorage.
  // const defaultCurrency = currency || 'gbp';
  // const userCurrency = window.localStorage.getItem('currency');

  // if (userCurrency) {
  //   currency = userCurrency;
  // }

  const defaultCurrency = window.localStorage.getItem('currency') || 'gbp';

  return `api/cryptos/${defaultCurrency}/${page}`;
};

export { ALL_COIN_QUERY_STRING, SINGLE_COIN_QUERY_STRING };
