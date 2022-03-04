const DELAY_AFTER_KEY_PRESS = 500;
const QUERY_DEBOUNCE_DURATION_MILLISECONDS = 500;

// Currency will eventually be stored on userData with backend, temporarily lets use localStorage.
const ALL_COIN_QUERY_STRING = (currency?: string, page?: number) => {
  const defaultCurrency = currency || 'gbp';
  const userCurrency = window.localStorage.getItem('currency');

  if (userCurrency) {
    currency = userCurrency;
  }

  return `coins/markets?vs_currency=${defaultCurrency}&order=market_cap_desc&per_page=100&page=${page}&sparkline=false`;
};

const SINGLE_COIN_QUERY_STRING = (crypto?: string) =>
  `coins/${crypto}?localization=false&tickers=false&market_data=false&developer_data=false&sparkline=false`;

export {
  ALL_COIN_QUERY_STRING,
  SINGLE_COIN_QUERY_STRING,
  QUERY_DEBOUNCE_DURATION_MILLISECONDS,
  DELAY_AFTER_KEY_PRESS,
};
