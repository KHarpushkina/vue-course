import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Article from "./models/Article";
import serverSetup from "./helpers/server-setup";

const app = express();

mongoose.connect(
    "mongodb+srv://db_admin:rc.if5642@articlesdb.iyt0b.mongodb.net/articles_database?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        app.listen(3000, () => {
            console.log("Connect");
        });
    }
);

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

/* const removeProductsFromCart = (res, next, idsToRemove) => {
    ProductInCart.deleteMany({ _id: { $in: idsToRemove } }, (err, deleteObject) => {
        if (deleteObject.n !== idsToRemove.length) {
            next(new Error("It seems there is no such product"));
        }
        res.send({ status: "ok" });
    });
};*/

app.get("/articles", (req, res, next) => {
    serverSetup
        .getDocuments(Article)
        .then((response) => res.status(200).send(response))
        .catch((err) => next(err));
});

app.post("/products/add", (req, res, next) => {
    const id = mongoose.Types.ObjectId(req.body.productToAdd._id);
    Product.findById(id, (err, product) => {
        if (!product) {
            return next(new Error("It seems there is no such product"));
        }
        for (let i = 0; i < req.body.count; i++) {
            const newProductInCart = new ProductInCart({
                _product: product.id,
            });
            newProductInCart.save((errWhenSave) => {
                if (errWhenSave) {
                    res.send(errWhenSave);
                }
            });
        }
        res.send({ status: "ok" });
    });
});

/*app.get("/cart", (req, res) => {
    ProductInCart.find({})
        .populate("_product")
        .exec((err, productsInCart) => {
            if (err) {
                res.send(err);
            }
            res.send(productsInCart);
        });
});

app.post("/cart/order", (req, res, next) => {
    const idsToOrder = req.body.productsToOrder;
    const idsToRemove = req.body.productsToRemove.map(id => {
        return mongoose.Types.ObjectId(id);
    });
    const newOrder = new Order({
        productsToOrder: idsToOrder
    });
    newOrder.save(err => {
        if (err) {
            res.send(err);
        }
        removeProductsFromCart(res, next, idsToRemove);
    });
});

app.post("/cart/remove", (req, res, next) => {
    const idsToRemove = req.body.productsToRemove.map(id => {
        return mongoose.Types.ObjectId(id);
    });
    removeProductsFromCart(res, next, idsToRemove);
});
*/

app.use((err, req, res, next) => {
    res.status(500);
    res.statusMessage = err;
    res.send(err);
});
