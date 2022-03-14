const { validationResult } = require('express-validator');

export function validate(req, res, next){
    const errors = validationResult(req);

    if (!errors.isEmpty()) {     
        return res.status(422).json({ errors: errors.array() });   
    }

    next()
}

export {default as exampleValidation} from "./example.js"