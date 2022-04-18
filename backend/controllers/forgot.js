const ResetModel = require('../models/reset.model');
const nodemailer = require("nodemailer");
const Joi = require('joi');
const bcryptjs = require('bcryptjs');
const UserModel = require('../models/user.model');


/* const transporter = nodemailer.createTransport({
    host: "0.0.0.0",
    port: 8025,
})  */
 const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'nkgcgvmdqdyqdr3z@ethereal.email',
        pass: 'dUnEFgZrAEjq5aB5tM'
    }
}); 

const forgot = async function (req, res) {

    const email = req.body.email
    const token = Math.random().toString(20).substring(2, 12)

    const reset = new ResetModel({
        email,
        token
    })

    await reset.save();

     const url = `http://localhost:4200/reset/${token}`
 
      /*
     await transporter.sendMail({
         from: '"Fred Foo 👻" <foo@example.com>', // sender address
         to: email, // list of receivers
         subject: "Reset Your Password ✔", // Subject line
         html: `Click <a href='${url}'>here</a> to reset your password`, // html body
       }); */
    // send mail with defined transport object

    
    let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: "bar@example.com, baz@example.com", // list of receivers
        subject: "Reset your Password✔", // Subject line
        text: "CLick link to reset your password", // plain text body
        html: `Click <a href="${url}" >here</a> to reset your password`, // html body
    });

    res.send({
        message: "Check your email"
    })

}

const reset = async function (req, res) {

    const body = req.body

    const schema = Joi.object({
       
        password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
            .required(),

        password_confirm: Joi.any().valid(Joi.ref('password')).required().messages({
            "any.only" : "Password must match"
          })

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

    const resetPassword = await ResetModel.findOne({
        token : body.token
    })

    if (!resetPassword){
        return res.status(400).send({
            message: 'Invalid Link'
        })
    }


    const {email} = await resetPassword.toJSON()

    const user = await UserModel.findOne({email})

    if (!user){
        return res.status(400).send({
            message: 'User does not exist'
        })
    }

    const salt = await bcryptjs.genSalt(10);

    user.password = await bcryptjs.hash(body.password, salt);

    user.save()

    res.send({
        message : 'Success'
    });


}


module.exports = {
    forgot,
    reset
}