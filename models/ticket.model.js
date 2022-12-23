const mongoose= require("mongoose");



const TicketSchema = new mongoose.Schema(
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

                                                                                                                                                                    
const TicketModel = mongoose.model("Seat", TicketSchema);
module.exports= TicketModel