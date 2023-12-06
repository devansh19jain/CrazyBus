// ticketController.js
const Booking = require('../models/Bookings');

// Function to find the latest booked bus by the user
exports.findBus = async (req, res) => {
  try {
    const { busId, user } = req.body;

    // Find all bookings for the given user, sorted by createdAt in descending order
    const latestBooking = await Booking.findOne({ user })
      .sort({ createdAt: -1 })
      .populate('busId'); // Assuming there is a reference to the busId in the Booking model

    if (!latestBooking) {
      // No bookings found for the user
      return res.status(404).json({ success: false, message: 'No booked buses found for the user' });
    }

    // Return the latest booked bus
    return res.status(200).json({ success: true, latestBookedBus: latestBooking.busId });
  } catch (error) {
    console.error('Error finding latest booked bus:', error);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
};
