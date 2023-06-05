 




 

 const UserModel = require("../models/users.models");
const ValidateRegister = require("../validation/Register");
const ValidateLogin = require("../validation/Login");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const fs = require('fs');




const Register = async (req, res) => {
    const { errors, isValid } = ValidateRegister(req.body);
    try {
        if (!isValid) {
            res.status(404).json(errors);
        } else {
            UserModel.findOne({ email: req.body.email }).then(async (exist) => {
                if (exist) {
                    errors.email = "user exist";
                    res.status(404).json(errors);
                } else {
                    const hash = bcrypt.hashSync(req.body.password, 10)//hashed password
                    req.body.password = hash;
                    req.body.role = "USER";
                    await UserModel.create(req.body);
                    res.status(200).json({ message: "success" });
                }
            });
        }
    } catch (error) {
        res.status(404).json(error.message);
    }
};



const Login = async (req, res) => {
    const { errors, isValid } = ValidateLogin(req.body)


    try {

        if (!isValid) {
            res.status(404).json(errors)

        } else {
            UserModel.findOne({ email: req.body.email })
                .then(user => {

                    if (!user) {
                        errors.email = "Not Found User"
                        res.status(404).json(errors)
                    } else {
                        bcrypt.compare(req.body.password, user.password)
                            .then(isMatch => {
                                if (!isMatch) {
                                    errors.password = "Incorrect Password !"
                                    res.status(404).json(errors)

                                } else {
                                    var token = jwt.sign({
                                        id: user._id,
                                        name: user.name,
                                        email: user.email,
                                        role: user.role



                                    }, process.env.PRIVATE_Key, { expiresIn: '1h' });
                                    res.status(200).json({
                                        message: "success",
                                        token:  "Bearer "+token
                                    })

                                }
                            })
                    }
                })
        }

    } catch (error) {

        res.status(404).json(error.message);

    }

}



const Test = (req, res)=>{  //yodkhloulou l user wl Admin
    res.send("welcome user")
}



const Admin = (req, res)=>{  //yodkhlou ken l Admin
    res.send("welcome Admin")
}

module.exports = {
    Register,
    Login,
    Test,
    Admin
};
 