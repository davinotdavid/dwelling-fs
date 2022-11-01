import styles from './CardList.module.css'; 

type CardListProps = {
  children: JSX.Element | JSX.Element[];
}

export default function CardList({ children }: CardListProps) {
  return (
    <ol className={styles.cardList}>
      {children}
    </ol>
  )
}