import React, { useEffect } from 'react'
import { Header } from './header'
import { API_URL } from '../constants'
import { useFetch } from '../hooks/fetch'
import Logo from '../assets/logo.svg'


interface HomeProps {
}

const nav = [
  {
    "id:": "1",
    "item": "Home",
    "url": "/"
  }
]

export const Home = ({ }: HomeProps): JSX.Element => {

  const { data } = useFetch({
    url: API_URL,
    params: {
      headers: {
        jwt: '84688968-53a0-4a2e-88f0-e7cfa246c8a6'
      }
    }
  });

  console.log('TOM data', data)

  return (
    <div>
      <Header logo={Logo} navigation={nav}/>
      {data && <p>{JSON.parse(data)}</p>}
    </div>
  )
}