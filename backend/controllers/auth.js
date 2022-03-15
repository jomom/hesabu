const Joi = require('joi');
// const { validateUser } = require('../helpers/validation_schema')

const register = function (req, res, next) {
    // let {firstName,secondName,email,password,confirm_password} = req.body
    /* 
        firtName = firstName.trim
        secondName = secondName.trim
        email = email.trim()
        password = password.trim
        confirm_password  = confirm_password .trim

    */

    const body = req.body

    const schema = Joi.object({
        firstName: Joi.string()
            .alphanum()
            .min(3)
            .max(30)
            .required(),

        secondName: Joi.string()
            .alphanum()
            .min(3)
            .max(30)
            .required(),

        email: Joi.string()
            .email({ minDomainSegments: 2 })
            .required(),

        password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
            .required(),

        confirm_password: Joi.string().required().valid(Joi.ref('password')),

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
    else {
        // on success replace req.body with validated value and trigger next middleware function
        res.send(body)
        next();
    }



}

const signin = function  (req,res,next) {
    // body
    res.send(
        "hello this is sign in page"
    )
}

module.exports = {
    register,
    signin
}