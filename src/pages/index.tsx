import { GetServerSideProps } from 'next'
import { Header } from '../components/Header'
import { Menu } from '../components/Menu'
import { Carousel } from '../components/Carousel'
import { api } from '../services/api'

export default function Home({ continents }) {
  return (
    <>
      <Header />
      <Menu />
      <Carousel continents={continents} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await api.get('/continents')

  return {
    props: {
      continents: data
    }
  }
}
