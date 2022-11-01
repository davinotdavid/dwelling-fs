import { useState } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import BalanceCard from '../components/BalanceCard';
import CardList from '../components/CardList';
import CardListItem from '../components/CardListItem';
import styles from '../styles/Home.module.css';

const cardFakeData = [
  {
    cardId: '111',
    cardLastFourDigits: '0232',
    balance: 23.2,
  },
  {
    cardId: '222',
    cardLastFourDigits: '1232',
    balance: 41.7,
  }
]

const Home: NextPage = () => {
  const [cards, setCards] = useState(cardFakeData);

  const onDeleteButtonClicked = (cardId: string) => {
    // TODO: Call API to delete
  }

  return (
    <>
      <Head>
        <title>Dwelling — Card Balance Checker</title>
        <meta name="description" content="Part of the technical test for Senior Frontend Developer at Dwelling.co" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <BalanceCard />
        <CardList>
          {
            cards.map(({ cardId, cardLastFourDigits, balance }) =>
              <CardListItem
                key={cardId}
                cardId={cardId}
                cardLastFourDigits={cardLastFourDigits}
                balance={balance}
                onDeleteButtonClicked={onDeleteButtonClicked}
              />
            )
          }
        </CardList>
      </main>
    </>
  )
}

export default Home
