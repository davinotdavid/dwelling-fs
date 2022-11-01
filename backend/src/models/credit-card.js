export class CreditCard {
  constructor ({ id, cardNumber }) {
    // Verify credit card number correctness
    if (typeof cardNumber !== 'string' || cardNumber.length !== 16) { throw new Error('Invalid card number') }

    // Update balance based on credit card number
    let balance = 0
    const lastDigit = cardNumber[15]

    if (lastDigit === '5' || lastDigit === '2') {
      balance = cardNumber.split('').slice(0, 12).reduce((previousValue, currentValue) => {
        const numberConverted = parseInt(currentValue)
        previousValue += numberConverted

        return previousValue
      }, 0)
    }

    // Set fields
    this.id = id
    this.cardNumber = cardNumber
    this.balance = balance
  }
}
