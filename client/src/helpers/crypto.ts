export const fetchCoinByQuery = async (query: string) => {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/search?query=${query}`
  );
  const data = await response.json();
  return data;
};
