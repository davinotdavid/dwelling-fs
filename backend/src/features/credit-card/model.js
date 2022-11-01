const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CreditCardSchema = new Schema({
  cardNumber: { type: String, required: true, maxLength: 16, select: false },
  balance: { type: Number, required: true },
  lastFourDigits: { type: String, required: true, maxLength: 4 }
})

// Export model
module.exports = mongoose.model('CreditCard', CreditCardSchema)

// export class CreditCard {
//   constructor ({ id, cardNumber }) {
// Verify credit card number correctness
// if (typeof cardNumber !== 'string' || cardNumber.length !== 16) { throw new Error('Invalid card number') }

//     // Set fields
//     this.id = id
//     this.cardNumber = cardNumber
//     this.balance = balance
//   }
// }
