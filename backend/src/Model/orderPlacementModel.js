const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    orderItems: [
        {
        product:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "product",
            required: true
        },
        name:{
           type: String,
           required: true,
        },
            email: {
                type: String,
                required: true
            },
            address: {
                type: String,
                required: true
            },
            city: {
                type: String,
                required: true
            },
            state: {
                type: String,
                required: true
            },
            zip: {
                type: String,
                required: true
            },
            country: {
                type: String,
                required: true
            },
            date: {
                type: Date,
                default: Date.now
            },
           
            quantity: {  
                type: Number,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            status: {
                type: String,
                required: true,
                default: "Pending"
            },
            image:{
                type:String,
                required:true,
            }
        }
    ],
    totalPrice: {
        type: Number,
        required: true
    },
    paymentMethod: {
        type: String,
        required: true
    },
    paymentResult: {
        id: { type: String },
        status: { type: String },
        update_time: { type: String },
        email_address: { type: String }
    },
  orderStatus:{
    type: String,
    enum : ['processing' , 'Shipped' , 'Delieverd' , 'Cancelled'],
    required: true,
    default: "processing"
  },
  delivarable:{
    type: Boolean,
    required: true,
    default: false
  },
  
shippingAddress: {
      country: { type: String, required: true },
        address: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        zip: { type: String, required: true },
        addresstypes: { type: String, required: true },


}

});

const OrderModel = mongoose.model("Order", OrderSchema);
module.exports = OrderModel;
