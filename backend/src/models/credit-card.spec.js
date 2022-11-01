import { expect, test } from 'vitest'
import { CreditCard } from './credit-card'

test('create a credit-card', () => {
  const creditCard = new CreditCard({
    id: '',
    cardNumber: '1234123412341234'
  })

  expect(creditCard).toBeInstanceOf(CreditCard)
  expect(creditCard.balance).toEqual(0)
})

test('validate credit card', () => {
  expect(() => {
    return new CreditCard({
      id: '',
      cardNumber: '312312321312'
    })
  }).toThrow()
})

test('card numbers ending in 5 or 2 should have balance as sum of first 12 numbers', () => {
  const creditCardA = new CreditCard({
    cardNumber: '1111111111111115'
  })

  const creditCardB = new CreditCard({
    cardNumber: '1111111111111112'
  })

  expect(creditCardA.balance).toEqual(12)
  expect(creditCardB.balance).toEqual(12)
})

test('card numbers NOT ending in 5 or 2 should have balance as 0', () => {
  const creditCardA = new CreditCard({
    cardNumber: '1111111111111119'
  })

  const creditCardB = new CreditCard({
    cardNumber: '1111111111111111'
  })

  expect(creditCardA.balance).toEqual(0)
  expect(creditCardB.balance).toEqual(0)
})
