	const Joi = require('joi');
	const CustomerModel = require('../models/customer.model');



	/*Get AllCustomers*/
	const allCustomers  = async function(req,res){
		CustomerModel.find(function(err,customerListResponse){
			if (err) {
				res.send({status: 500,message :'Unable to Find Customers'})
			}
			else{
				const recordCount = customerListResponse.length;
				res.send({recordCount : recordCount,response: customerListResponse})
			}
		})
	}

	/*Get details of a Specific Customers*/
	const singleCustomer  = async function(req,res){

		const userId = req.query.userId;

		CustomerModel.findById(userId, function(err,customerResponse){

			if (err) {
				res.send({status: 500,message :'Unable to the Find Customer'})
			}
			else{
				
				res.send({status:200,response: customerResponse})
			}
		})
	}

	/*Add Single Customer */
	const createCustomer  = async function(req,res){

		const body = req.body;

		const schema = Joi.object({
			firstName: Joi.string()
			.alphanum()
			.min(3)
			.max(30)
			.required(),

			lastName: Joi.string()
			.alphanum()
			.min(3)
			.max(30)
			.required(),

			email: Joi.string()
			.email({ minDomainSegments: 2 })
			.required(),

			phoneNumber: Joi.string()
			.alphanum()
			.min(3)
			.max(30)
			.required(),

			orders: Joi.number(),			
			
			location: Joi.string()
			.required(),

		})

	    // schema options
	    const options = {
	        abortEarly: false, // include all errors
	        allowUnknown: true, // ignore unknown props
	        stripUnknown: true // remove unknown props
	    };

	    // validate request body against schema
	    const { error, value } = schema.validate(body, options);

	    if (error) {
	    	return res.status(400).send(error.details)
	        // on fail return comma separated errors
	        // next(`Validation error: ${error.details.map(x => x.message).join(', ')}`);
	    }

	    let firstName = body.firstName
	    let lastName = body.lastName
	    let email = body.email
	    let phoneNumber =  body.phoneNumber
	    let orders = body.orders
	    let location = body.location	    	

	    const customerObj = new CustomerModel({
	    	firstName: firstName,
	    	lastName: lastName,
	    	email: email,
	    	phoneNumber : phoneNumber,
	    	orders : orders,
	    	location : location
	    })

	    

	customerObj.save(function(err,customerObj){

		if (err) {
			res.send({status: 500,message :'Unable to add Customer'})
		}
		else{
			res.send({status:200,message: 'User added Succesfully',customerDetails: customerObj})
		}
	});


	}

	/*Update Existing Customer*/
	const updateCustomer = async function (req,res){
		
	    const userId = req.body._id;
	    let firstName = req.body.firstName;
	    let lastName = req.body.lastName;
	    let email = req.body.email;
	    let phoneNumber =  req.body.phoneNumber;
	    let orders = req.body.orders;
	    let location = req.body.location;	    	

		let customerObj = {
			userId: userId,
	    	firstName: firstName,
	    	lastName: lastName,
	    	email: email,
	    	phoneNumber : phoneNumber,
	    	orders : orders,
	    	location : location
	    };

		CustomerModel.findByIdAndUpdate(userId, customerObj,function(err,customerResponse){
			if (err) {
				res.send({status: 500,message :'Unable to update the Customer'})
			}
			else{
				res.send({status:200,message:'Customer Updated Succesfully',response: customerObj})
			}
		})
	}


	/*Delete Existing Customer*/
	const deleteCustomer = async function (req,res){
		const userId = req.query.userId;

		let customerObj = {
			firstName : 'Amos',
			lastName : 'Ombati',
			email: 'amos@gmail.com',
			phoneNumber: '0720323813',
			orders: 2,
			location: 'Kahawa West'
		};

		CustomerModel.findByIdAndDelete(userId,customerObj,function(err,customerResponse){

			if (err) {
				res.send({status: 500,message :'Unable to delete the Customer'})
			}
			else{
				
				res.send({status:200,message:'Customer Deleted Succesfully', response: customerResponse})
			}
		})
	}

	/*Search Existing Customers*/
	const searchCustomer = async function (req,res){
		res.send('Respond with a resource')
	}


	module.exports= {
		allCustomers,
		singleCustomer,
		createCustomer,
		updateCustomer,
		deleteCustomer,
		searchCustomer
	}