const Joi = require('joi');
const UserModel = require('../models/user.model');
const bcryptjs = require('bcryptjs');
const { sign, verify } = require('jsonwebtoken');


// const { validateUser } = require('../helpers/validation_schema')


/*Register a user*/
const register = async function (req, res) {

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

        password_confirm: Joi.ref('password')

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


    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(body.password, salt);


    const user = new UserModel({
        firstName: body.firstName,
        lastName: body.secondName,
        email: body.email,
        password: hashedPassword
    })

    const result = await user.save();

    const { password, ...data } = await result.toJSON()

    // on success replace req.body with validated value and trigger next middleware function
    res.send(data)

}

const login = async function (req, res) {

    const user = await UserModel.findOne({ email: req.body.email });

    if (!user) {
        return res.status(404).send({
            message: 'Invalid Credentials'
        })
    }

    if (!await bcryptjs.compare(req.body.password, user.password)) {
        return res.status(400).send({
            message: 'Invalid Credentials'
        })
    }
    ///jwt 
    const token = sign({ _id: user._id }, process.env.JWT_SECRET)

    res.cookie('jwt', token, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000 //one day
    });

    res.send({
        message: 'Success'
    })
}

const user = async function (req, res) {
    try {
        const cookie = req.cookies['jwt'];
        const payload = verify(cookie, process.env.JWT_SECRET)

        if (!payload) {
            return res.status(401).send({
                message: 'Unauthenticated'
            })
        };

        const user = await UserModel.findOne({ _id: payload._id });

        if (!user) {
            return res.status(401).send({
                message: 'Unauthenticated'
            })
        }

        const { password, ...data } = await user.toJSON()

        res.send(data)
    } catch (e) {
        return res.status(401).send({
            message: 'Unauthenticated'
        })
    }
}

const logout = async function (req, res) {
    // body
    res.cookie('jwt', '', { maxAge: 0 });

    res.send({
        message: 'success'
    })
}

module.exports = {
    register,
    login,
    user,
    logout
}