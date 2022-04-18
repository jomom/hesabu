const express = require('express');
const router = express.Router();


/*User Controllers*/
const authController = require("../controllers/auth")
const forgotController = require("../controllers/forgot")

/*Customers Controllers*/
const customersController = require("../controllers/customers")

/*
Admin Product Controller
*/
const adminProductsController = require("../controllers/adminproducts")



/*User Routes*/
router.post('/auth/register', authController.register);
router.post('/auth/login' , authController.login);
router.get('/auth/user' , authController.user);
router.post('/auth/logout' , authController.logout);
router.post('/auth/forgot' , forgotController.forgot);
router.post('/auth/reset' , forgotController.reset);

/*Customers Routes*/
router.get('/customers/list',customersController.allCustomers);
router.get('/customers/view',customersController.singleCustomer);
router.post('/customers/add',customersController.createCustomer);
router.put('/customers/update',customersController.updateCustomer);
router.delete('/customers/delete',customersController.deleteCustomer);
router.post('/customers/search',customersController.searchCustomer);


/*
Admin Products Routes
*/
router.get('/adminproducts/getall',adminProductsController.allProducts)
router.post('/adminproducts/add',adminProductsController.addProduct)


//exports
module.exports = router
 