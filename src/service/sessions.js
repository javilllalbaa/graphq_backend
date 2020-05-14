//import { jwt } from 'jsonwebtoken'
var jwt = require('jsonwebtoken')
const secret = "--MY-SECRET-PASS--"

export const generateToken = (user) => {
    var token = jwt.sign({ 
        exp: Math.floor(Date.now() / 1000) + (60 * 10), // 10 minutos
        iat: Math.floor(Date.now() / 1000) - 30,
        data: {
            _id: user._id, 
            name: user.name,
            username: user.username,
            email: user.email
        }
    }, 
    secret, { algorithm: 'HS256', mutatePayload: true })
    return {token: token}
}