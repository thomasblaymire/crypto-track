const DELAY_AFTER_KEY_PRESS = 500;
const QUERY_DEBOUNCE_DURATION_MILLISECONDS = 500;

const ALL_COIN_QUERY_STRING = () => {
  let currency = 'gbp';
  const userCurrency = window.localStorage.getItem('currency');

  if (userCurrency) {
    currency = userCurrency;
  }

  return `coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;
};

export {
  ALL_COIN_QUERY_STRING,
  QUERY_DEBOUNCE_DURATION_MILLISECONDS,
  DELAY_AFTER_KEY_PRESS,
};
