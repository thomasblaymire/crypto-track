import { useQuery } from 'react-query';

// A simple search hook used to fetch all cryptos based on a given string.
export const useSearch = (query?: string) => {
  return useQuery(
    ['query', query],
    async () => {
      const response = await fetch(
        `${process.env.COINGEKO_API}/search?query=${query}`
      );
      const data = await response.json();
      return data.coins.slice(0, 5);
    },
    {
      enabled: true,
    }
  );
};
