export const fetchCoinByQuery = async (query: string) => {
  const response = await fetch(
    ` `
  );
  const data = await response.json();
  return data;
};
