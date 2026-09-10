const Products = require("../models/products");

exports.renderProducts = (req,res)=>{
    const cookie = req.session.isLoggedIn;

    Products.fetchProducts()
        .then(([rows,fieldData])=>{
            res.render(
                "home", 
                {
                    products:rows,
                    isLoggedIn:cookie
                }
            );
        })
}

exports.renderAddProduct = (req,res)=>{
    const cookie = req.session.isLoggedIn;

    res.render("add-product", {isLoggedIn:cookie});
}

exports.postAddProduct = (req,res)=>{
    const {productname,price,image} = req.body;

    const products = new Products(null,productname,price,image);

    products.postData().then(()=>{
        res.redirect('/');
    })
}

exports.renderEditProduct = (req,res)=>{
    const cookie = req.session.isLoggedIn;
    
    Products.fetchProductById(req.params.id)
        .then(([ [productData], fieldData])=>{
            res.render(
                "edit-product",
                {
                    product : productData,
                    isLoggedIn:cookie
                }
            )
        })
}

exports.editProduct = (req,res)=>{
    const {productname, price, image} = req.body;
    const id = req.params.id;

    const products = new Products(id,productname,price,image);

    products.editData().then(()=>{
        res.redirect('/');
    })
}

exports.deleteProduct = (req,res)=>{
    Products.deleteProductById(req.params.id)
        .then(()=>{
            res.redirect('/');
        })
}