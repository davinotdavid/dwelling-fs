import type { NextPage } from 'next'
import Head from 'next/head'

import BalanceCardForm from '../components/BalanceCardForm';
import CardList from '../components/CardList';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dwelling — Card Balance Checker</title>
        <meta name="description" content="Part of the technical test for Senior Frontend Developer at Dwelling.co" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <BalanceCardForm />
        <CardList />
      </main>
    </>
  )
}

export default Home
