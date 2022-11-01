import DeleteIcon from '../Icons/DeleteIcon';
import styles from './CardListItem.module.css';
import { useDeleteCard } from './hooks';

type CardListItemProps = {
  cardId: string;
  cardLastFourDigits: string;
  balance: number;
}

export default function CardListItem({ cardId, cardLastFourDigits, balance }: CardListItemProps) {
  const deleteCard = useDeleteCard();

  const onDeleteButtonClicked = (cardId: string) => {
    deleteCard.mutate(cardId);
  }

  return (
    <li className={styles.cardListItem}>
      <span>Card ending in {cardLastFourDigits}</span>
      <div className={styles.balanceContainer}>
        <span>Balance: ${balance}</span>
        <button onClick={() => onDeleteButtonClicked(cardId)}>
          <DeleteIcon />
        </button>
      </div>
    </li>
  )
}