import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  items: { type: Array, required: true },
  amount: { type: Number, required: true },
  address: { type: Object, required: true },
  status: {
    type: String,
    default: "Food Processing",
    enum: [
      "Food Processing",
      "Payment Pending",
      "Pending Confirmation",
      "Confirmed",
      "Out for delivery",
      "Delivered",
      "Cancelled"
    ]
  },
  payment: { type: Boolean, default: false },
  paymentMethod: {
    type: String,
    enum: ["online", "cod"],
    default: "online"
  },
  date: { type: Date, default: Date.now }
});

// Fix model overwrite warning
const orderModel = mongoose.models.order || mongoose.model("order", orderSchema);

export default orderModel;
