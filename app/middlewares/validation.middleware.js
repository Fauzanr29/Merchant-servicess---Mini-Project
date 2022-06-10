const {check, validationResult} = require('express-validator');

exports.validateUSer = [
    check('username')
        .trim()
        .escape()
        .not()
        .isEmpty()
        .withMessage('Username can not be empty!')
        .bail()
        .isLength({min:3, max: 50})
        .withMessage('Minimum 3 characters required!')
        .bail(),

    check('password')
        .not()
        .isEmpty()
        .withMessage('Password cannot be empty')
        .isLength({min: 6})
        .withMessage('Password must be more that 6 charecters'),
    
    check('address')
        .trim()
        .escape()
        .not()
        .isEmpty()
        .withMessage('address can not be empty!')
        .bail(),

    check('phone_number')
        .not()
        .isEmpty()
        .withMessage('phone number can not be empty!')
        .bail(),

    (req, res, next) =>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(422).json({errors: errors.array()});
        }
        next();
    },
];