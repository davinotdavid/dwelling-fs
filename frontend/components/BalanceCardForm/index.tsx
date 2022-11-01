import { useState, ChangeEvent, MouseEvent } from 'react';
import DwellingIcon from '../Icons/DwellingIcon';
import styles from './BalanceCardForm.module.css';

export default function BalanceCardForm() {
  const [creditCardNumber, setCreditCardNumber] = useState<string>('');

  const onCreditCardInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    // Remove any character that is not a number
    const onlyNumbers = value.replace(/\D/g, '');

    // Add a space in between each set of 4 numbers
    const formattedValue = onlyNumbers
      .replace(/(\d{4})/, '$1 ')
      .replace(/(\d{4}) (\d{4})/, '$1 $2 ')
      .replace(/(\d{4}) (\d{4}) (\d{4})/, '$1 $2 $3 ');

    setCreditCardNumber(formattedValue);
  }

  const onCheckButtonClicked = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // TODO: Call the API
  }

  return (
    <form>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h1>Balance Checker</h1>
          <DwellingIcon width={25} height={23} />
        </div>
        <p>Enter your card number to check it's balance.</p>
      </div>

      <input
        onChange={onCreditCardInputChange}
        value={creditCardNumber}
        className={styles.cardInput}
        name="cardnumber"
        type="text"
        placeholder="xxxx xxxx xxxx xxxx"
        aria-label="Credit card number"
        maxLength={19}
      />

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