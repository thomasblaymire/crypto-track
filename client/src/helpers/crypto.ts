import { formatCryptoData } from './format'

// TODO: Performance improvements and error handling inc caching results for perf
const headers = {
  headers: {
    'X-CMC_PRO_API_KEY': process.env.COINMARKETCAP_KEY,
  },
}

export const fetchCryptoData = async () => {
  const response = await fetch(process.env.COINMARKETCAP_ALL_CURRENCIES, headers)
  const data = await response.json()
  const ids = data.data.map((item) => item.id).toString()
  return getCryptoMetadata(ids, data)
}

export const fetchCryptoBySearch = async (query: string) => {
  const response = await fetch(`https://api.coingecko.com/api/v3/search?query=${query}`, headers)
  const data = await response.json()
  return data;
}

// CoinmarketCap kindly doesn't format both the ALL_CURRENCIES and META_DATA responses in the same way.
// therefore we create a new object and sort by their uuid accordingly.
const getCryptoMetadata = async (ids, data) => {
  const metaRequest = await fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?id=${ids}`, headers);
  const metaJson = await metaRequest.json();

  const cryptoDataById = {};
  data.data.forEach((obj) => {
    const propertyName = obj.id;
    delete obj.id;
    cryptoDataById[propertyName] = obj;
  });

  // Populate the image property into the new object..
  Object.keys(metaJson.data).forEach((item) => {
    const logo = metaJson.data[item].logo;
    const cryptoId = metaJson.data[item].id;
    cryptoDataById[cryptoId].image = logo;
  })

  const fullData = [
    data
  ]

  return formatCryptoData(fullData);
}
