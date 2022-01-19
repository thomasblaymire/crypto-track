import React, { useEffect, useState, useCallback } from 'react';
import { Layout } from './Layout';
import { CryptoTable } from './CryptoTable';
import { Loading } from './Loading';
import { Search } from './Search'
import { fetchCryptoData, fetchCryptoBySearch } from '../helpers/crypto'
import { cryptoHeadingColumns } from '../data'
import { useParams } from 'react-router-dom'

interface HomeProps {}

export const Home = ({}: HomeProps): JSX.Element => {
  const [searchInput, setSearchInput] = useState('');
  const [data, setData] = useState(null);
  const [resultData, setResultData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [ searchQuery, setSearchQuery ] = useState(null);
  const { params } = useParams()
  
  console.log('TOM params', params)

  const fetchCryptoTableData = useCallback(async () => {
     const cryptoData = await fetchCryptoData();
     setData(cryptoData)
  }, [])

  useEffect(() => {
    try {
      setLoading(true);
      fetchCryptoTableData()
    } catch(err: any) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }, [fetchCryptoTableData])


  // const searchItems = searchValue => {
  //   setSearchInput(searchValue);
  //   setLoading(true)
  //   if (searchInput !== '' && data) {
  //     const filteredData = data.filter(item => {
  //       return Object.values(item)
  //         .join('')
  //         .toLowerCase()
  //         .includes(searchInput.toLowerCase());
  //     });
  //     setData(filteredData);
  //     setLoading(false)
  //   } else {
  //     setData(data);
  //   }
  // };

  const updateSearchResults = async (query, delay) => {
    // API CALL TO FETCH SEARCH RESULTS BY QUERY
    setSearchQuery(query);
    console.log('Tom search query', query, delay);
    const cryptoData = await fetchCryptoBySearch(query);
    console.log('TOM crypto data', cryptoData)
    setResultData(cryptoData.coins)
  }

  return (
    <Layout>
      {loading && <Loading position="center" />}
      {error && <p>{error}</p>}
      <Search updateSearchResults={updateSearchResults} />
      {data && !searchQuery && (
        <CryptoTable 
          headingColumns={cryptoHeadingColumns} 
          data={data} 
          /> 
      )}
      {resultData && (
        <ul>
          {resultData.map((coin) => <li>{coin.name}</li>)}         
        </ul>
      )}
    </Layout>
  );
};
