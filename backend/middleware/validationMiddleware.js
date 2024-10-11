import {body,validationResult} from 'express-validator';

export const loginValidation = [
    body("email").isEmail().withMessage("Invalid email address!"),
    body("password").isLength({min:6}).withMessage("Password must be 6 characters long")
]

export const registerValidation = [
    body("position")
    .isIn(['CEO', 'Secretary', 'Production Head', 'Resellers Sales Head','Reseller','Manager'])
    .withMessage("Invalid position value!"),
    body("lastName")
        .notEmpty()
        .withMessage("Lastname is required!"),
    body("firstName")
        .notEmpty()
        .withMessage("Firstname is required!"),
    body("middleName")
        .notEmpty()
        .withMessage("Middle name is required!"),
    body("email")
        .isEmail()
        .withMessage("Invalid email address!"),
    body("phoneNumber")
        .matches(/^(09|\+639)\d{9}$/)
        .withMessage("Invalid phone format!"),
    body("address.street")
        .notEmpty()
        .withMessage("Street is required!"),
    body("address.municipality")
        .notEmpty()
        .withMessage("Municipality is required!"),
    body("address.province")
        .notEmpty()
        .withMessage("Province is required!"),
    body("address.postalCode")
        .notEmpty()
        .withMessage("Postal code is required!"),
    body("address.country")
        .notEmpty()
        .withMessage("Country is required!"),
    body("gender")
        .isIn(['Male', 'Female'])
        .withMessage("Invalid gender value!"),
    body("bDate")
        .isISO8601()
        .toDate()
        .withMessage("Invalid birthdate format!")
        .custom(value => {
            const birthDate = new Date(value);
            const today = new Date();
            const age = today.getFullYear() - birthDate.getFullYear();
            const monthDiff = today.getMonth() - birthDate.getMonth();

            if(monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())){
                age--;
            }
            if(birthDate > today){
                throw new Error("Birthdate cannot be a future date!");
            }
            if(age < 18 || age > 60){
                throw new Error("Age must be between 18 and 60 years!");
            }
            return true;
        }),
];

export const validate = (req,res,next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({success:false, errors:errors.array() });
    }
    next();
}