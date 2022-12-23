const mongoose= require("mongoose");



const BusSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    fromplace: { type: String, required: true },
    toplace: { type: String, required: true },
    departure: { type: Date, required: true }
  },
  {
    timestamps: true,
  }
)

                                                                                                                                                                    
const BusModel = mongoose.model("Bus", BusSchema);
module.exports= BusModel