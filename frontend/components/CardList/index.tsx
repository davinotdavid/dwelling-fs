import CardListItem from '../CardListItem';
import styles from './CardList.module.css'; 
import { useCardList } from './hooks';

export default function CardList() {
  const { isLoading, error, data } = useCardList();

  if (isLoading) return <span>Loading...</span>

  if (error) return <span>An error has occurred: {error.message}</span>

  const sortedData = data.sort((a, b) => b.balance - a.balance)

  return (
    <ol className={styles.cardList}>
      {
        sortedData.map(({ _id, lastFourDigits, balance }) =>
          <CardListItem
            key={_id}
            cardId={_id}
            cardLastFourDigits={lastFourDigits}
            balance={balance}
          />
        )
      }
    </ol>
  )
}