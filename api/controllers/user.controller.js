const createError = require("http-errors");
const User = require("../models/user.model");
const bcrypt = require("bcryptjs")

module.exports.create = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then((hash) => {User.create({
            email: req.body.email,
            password: hash
        })
            .then((user) => res.status(201).json(user))
            .catch(() => next(createError(400, "plata o plomo!")));
        })
        
        
            
   
}

module.exports.Login = (req, res, next) => {
    User.findOne({email: req.body.email})
        .then((user) => {
            if(user) {
                bcrypt.compare(req.body.password, user.password).then((match) => {
                    if(match) {
                        req.session.userId = user.id;
                        res.json(user)
                    }
                    else {
                        next(createError(418, "Incorrect data"))
                     }
                })
            }
            else {
                next(createError(418, "Incorrect data"))
            }
            
        })

}
