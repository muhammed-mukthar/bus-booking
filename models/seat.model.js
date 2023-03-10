const mongoose= require("mongoose");



const SeatSchema = new mongoose.Schema(
  {
    BusId: { type: mongoose.ObjectId },
    seatNumber: { type: Number, required: true },
    available: { type: Boolean, default: true },
    bookedBy: { type: mongoose.ObjectId, default: null }
  },
  {
    timestamps: true,
  }
)

                                                                                                                                                                    
const SeatModel = mongoose.model("Seat", SeatSchema);
module.exports= SeatModel