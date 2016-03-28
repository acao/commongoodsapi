'use strict';

import mongoose from 'mongoose';
import validate from 'mongoose-validator';

const goodSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  wholesalePrice: {
    type: String,
  },
  barCode: {
    type: String,
  },
  unitOfMeasure: {
    type: String,
    default: 'oz',
  },
  uomQuantity: {
    type: Number,
  },
  origin: {
    type: String,
  },
  botanicalName: {
    type: String,
  },
  ingredients: {
    type: String,
  },
  fullDescription: {
    type: String,
  },
  safetyInfo: {
    type: String,
  },
  suggestedUses: {
    type: String,
  },
  labelDirections: {
    type: String,
  },
}, {
  versionKey: false,
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  // toJSON: {
  //   transform(doc, ret) {
  //     delete ret.hashed_password;
  //   },
  // },
});
//
// // goodSchema.virtual('password')
// //   .set(function setPassword(value) { this._password = value; })
// //   .get(function getPassword() { return this._password; });
// //
// // goodSchema.virtual('confirm_password')
// //   .set(function setConfirmPassword(value) { this._confirm_password = value; })
// //   .get(function getConfirmPassword() { return this._confirm_password; });
// //
// // goodSchema.pre('validate', function preValidate(next) {
// //   if (this.provider !== 'local') return next();
// //
// //   if (!this.hashed_password && !this.password) {
// //     this.invalidate('password', 'is required');
// //   } else if (this.password.length < 6) {
// //     this.invalidate('password', 'must be at least 5 characters');
// //   } else if (this.password !== this.confirm_password) {
// //     this.invalidate('password', 'doesn\'t match the confirmation password');
// //   }
// //
// //   next();
// // });
//
// goodSchema.pre('save', async function preSave(next) {
//   // if (!this.password) return next();
//   //
//   // try {
//   //   this.hashed_password = await bcrypt.hash(this.password);
//   //   next();
//   // } catch (error) {
//   //   next(error);
//   // }
// });

export default mongoose.model('Good', goodSchema);
