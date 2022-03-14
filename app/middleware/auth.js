import jwt from "jsonwebtoken";
import config from '../config/config'


const verifyToken = (req,res,next) => {
    const authHeader = req.headers.authorization

    if(authHeader){
        const token = authHeader.split(' ')[1]
        jwt.verify(token, config.jwtKey, (err, user) => {
            if (err) res.sendStatus(403)
            next()
        })

    }
    else res.sendStatus(401)
}

export default {verifyToken}