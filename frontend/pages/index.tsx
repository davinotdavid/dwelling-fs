import type { NextPage } from 'next'
import Head from 'next/head'
import BalanceCard from '../components/BalanceCard';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Dwelling — Card Balance Checker</title>
        <meta name="description" content="Part of the technical test for Senior Frontend Developer at Dwelling.co" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <BalanceCard />
      </main>

    </div>
  )
}

export default Home
