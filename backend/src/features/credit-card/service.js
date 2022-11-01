function generateBalanceForCreditCard (cardNumber) {
  if (typeof cardNumber !== 'string' || cardNumber.length !== 16) { throw new Error('Invalid card number') }

  let balance = 0
  const lastDigit = cardNumber.slice(-1)

  if (lastDigit === '5' || lastDigit === '2') {
    balance = cardNumber.split('').slice(0, 12).reduce((previousValue, currentValue) => {
      const numberConverted = parseInt(currentValue)
      previousValue += numberConverted

      return previousValue
    }, 0)
  }

  return balance
}

module.exports = { generateBalanceForCreditCard }
