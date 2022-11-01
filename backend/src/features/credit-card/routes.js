const express = require('express')
const router = express.Router()
const CreditCard = require('./model')
const { generateBalanceForCreditCard } = require('./service')

// GET /credit-cards
router.get('/', async function (req, res) {
  try {
    const cards = await CreditCard.find()
    res.status(200).json(cards)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
})

// POST /credit-cards
router.post('/', async function (req, res) {
  const { cardNumber } = req.body

  try {
    const balance = generateBalanceForCreditCard(cardNumber)
    const lastFourDigits = cardNumber.slice(-4)
    const card = await CreditCard.create({ cardNumber, balance, lastFourDigits })
    await card.save()
    res.status(200).json(card)
  } catch (e) {
    res.status(400).json({ message: e.message })
  }
})

// DELETE /credit-cards/:id
router.delete('/:id', async function (req, res) {
  const { id } = req.params

  try {
    await CreditCard.deleteOne({ _id: id })
    res.status(204)
  } catch (e) {
    res.status(400).json({ message: e.message })
  }
})

module.exports = router
