import { expect, test } from 'vitest'
import { generateBalanceForCreditCard } from './service'

test('card numbers should be a 16 characters string', () => {
  const cardNumberA = 1234123412341234
  const cardNumberB = {}
  const cardNumberC = null
  const cardNumberD = NaN
  const cardNumberE = undefined
  const cardNumberF = '123'

  expect(() => generateBalanceForCreditCard(cardNumberA)).toThrow()
  expect(() => generateBalanceForCreditCard(cardNumberB)).toThrow()
  expect(() => generateBalanceForCreditCard(cardNumberC)).toThrow()
  expect(() => generateBalanceForCreditCard(cardNumberD)).toThrow()
  expect(() => generateBalanceForCreditCard(cardNumberE)).toThrow()
  expect(() => generateBalanceForCreditCard(cardNumberF)).toThrow()
})

test('card numbers ending in 5 or 2 should have balance as sum of first 12 numbers', () => {
  const cardNumberA = '1111111111111115'
  const cardNumberB = '1111111111111112'

  expect(generateBalanceForCreditCard(cardNumberA)).toEqual(12)
  expect(generateBalanceForCreditCard(cardNumberB)).toEqual(12)
})

test('card numbers NOT ending in 5 or 2 should have balance as 0', () => {
  const cardNumberA = '1111111111111119'
  const cardNumberB = '1111111111111111'

  expect(generateBalanceForCreditCard(cardNumberA)).toEqual(0)
  expect(generateBalanceForCreditCard(cardNumberB)).toEqual(0)
})
