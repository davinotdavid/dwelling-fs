import DeleteIcon from '../Icons/DeleteIcon';
import styles from './CardListItem.module.css';

type CardListItemProps = {
  cardId: string;
  cardLastFourDigits: string;
  balance: number;
  onDeleteButtonClicked: (cardId: string) => void,
}

export default function CardListItem({ cardId, cardLastFourDigits, balance, onDeleteButtonClicked }: CardListItemProps) {
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