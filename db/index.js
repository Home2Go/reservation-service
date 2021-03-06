const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/reservations', { useNewUrlParser: true, useUnifiedTopology: true });

const datesSchema = mongoose.Schema({
  dayOfWeek: String,
  month: String,
  date: String,
  year: String,
  available: Boolean,
}, { _id: false });

const listingSchema = mongoose.Schema({
  listing_ID: { type: Number, unique: true },
  name: String,
  maxGuests: Number,
  minDays: Number,
  rate: Number,
  cleaningFee: Number,
  serviceFee: Number,
  dates: [datesSchema],
});

const reservationsSchema = mongoose.Schema({
  listing_ID: Number,
  check_in: String,
  check_out: String,
  adults: Number,
  children: Number,
  infants: Number,
});

const Listing = mongoose.model('Listing', listingSchema);
const Reservation = mongoose.model('Reservation', reservationsSchema);

module.exports = {
  mongoose,
  Listing,
  Reservation,
};
