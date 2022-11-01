import { useState, ChangeEvent, MouseEvent } from 'react';
import DwellingIcon from '../Icons/DwellingIcon';
import styles from './BalanceCardForm.module.css';
import { useCreateCard } from './hooks';

export default function BalanceCardForm() {
  const [cardNumber, setCardNumber] = useState<string>('');
  const [error, setError] = useState<string>('');
  const addCard = useCreateCard();

  const onCreditCardInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    // Remove any character that is not a number
    const onlyNumbers = value.replace(/\D/g, '');

    // Add a space in between each set of 4 numbers
    const formattedValue = onlyNumbers.replace(/(\d{4})/g, '$1 ').replace(/(^\s+|\s+$)/,'')

    setCardNumber(formattedValue);
  }

  const onCheckButtonClicked = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const sanitizedCardNumber = cardNumber.replace(/\s/g, "");

    if (sanitizedCardNumber.length !== 16) {
      setError('Invalid number');
    } else {
      addCard.mutate(sanitizedCardNumber);
      setError('');
    }
  }

  return (
    <form>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h1>Balance Checker</h1>
          <DwellingIcon width={25} height={23} />
        </div>
        <p>Enter your card number to check it&apos;s balance.</p>
      </div>

      <input
        onChange={onCreditCardInputChange}
        value={cardNumber}
        className={styles.cardInput}
        name="cardnumber"
        type="text"
        placeholder="xxxx xxxx xxxx xxxx"
        aria-label="Credit card number"
        maxLength={19}
      />

      {
        error && <p className={styles.errorMessage} role="alert">Invalid number</p>
      }

      <button
        type='submit'
        className={styles.checkButton}
        onClick={onCheckButtonClicked}
      >
        Check
      </button>
    </form>
  )
}