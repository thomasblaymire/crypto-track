
// Some simple API data formatting to keep the component light and readable
const formatCryptoData = (data: any) => {
  const cryptoData = [];
    data[0].data.forEach((item) => {
      const { id, name, cmc_rank, symbol, quote, image } = item;
      const { price, percent_change_24h, market_cap } = quote.AUD;
      const obj = { 
        id,
        name,
        rank: cmc_rank,
        symbol,
        image,
        price,
        percent24h: percent_change_24h.toFixed(2),
        marketCap:market_cap.toLocaleString('en-AU'),
      };
    cryptoData.push(obj);
  });
  return cryptoData
}

export { formatCryptoData }