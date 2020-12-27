import * as mongoose from 'mongoose';

const productsInCartSchema = new mongoose.Schema({
    _product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Products'
    }
});

const ProductInCart = mongoose.model('Cart', productsInCartSchema);
export default ProductInCart;
