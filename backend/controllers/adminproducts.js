const Product = require('../models/product.model');

/*
Add single Product
*/
const addProduct = async (req, res) => {
    // var file = req.file
    let avail;
    let qty;
    let limit;
    if (!isNaN(req.body.productqty)) {

        if (req.body.productqty <= 0) {
            avail = false;
            qty = 0;
            limit = false;
        }
        else {
            avail = true;
            qty = req.body.productqty;
            limit = false;
        }
        if (req.body.productqty == -1) {
            avail = true;
            qty = -1;
            limit = true;
        }
        // **********************
        try {
            // const image = req.file
            // const imageUrl = await fileUploadmiddleware.uploadImage(image)
            var product = new Product({
                productname: req.body.productname,
                productdesc: req.body.productdesc,
                productqty: qty,
                productprice: req.body.productprice,
                // productimage: file.filename,
                // productimage: imageUrl,
                productavail: avail,
                unlimited: limit
            })
            try {
                doc = product.save();
                console.log("product added by admin");
                const io = req.app.get('io');
                io.emit("productcrudbyadmin", " product crud operation done by admin!");
                return res.json({ msg: 'product added' });
            }
            catch (err) {
                console.log("some error while adding product by admin here")
                return res.json({ errormsg: 'Somthing went wrong here' });
            }
        }
        catch (err) {
            console.log("some error while adding product by admin")
            return res.json({ errormsg: 'Somthing went wrong' });
        }
        // **********************

    }
    else {
        console.log("Invalid Quantity!");
        return res.json({ errormsg: 'Invalid Quantity!' });
    }
}


/* Get all products */
const allProducts = async function (req,res){
    res.json('Hello World!')
}


module.exports= {
	addProduct,	
    allProducts
}