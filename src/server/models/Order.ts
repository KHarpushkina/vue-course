import * as mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    productsToOrder: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Products'
    }]
});

const Order = mongoose.model('Order', orderSchema);
export default Order;
