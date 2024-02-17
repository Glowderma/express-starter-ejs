import responseHandler from "../utils/response.handler.js";
import {api} from "../utils/env.js";
import jwt from "jsonwebtoken";
import jwksRsa from "jwks-rsa";

const auth = async (req, res, next) => {
    try {
        const token = req && req.headers && req.headers.authorization ? `${req.headers.authorization}` : null;
        if(!token){
            return responseHandler.unauthorizedErrorHandler(res, 0, "No token received.");
        }
        const client = jwksRsa({
            jwksUri: api.jwks
        });
        const key = await client.getSigningKey(api.kid);
        const publicKey = key.getPublicKey();
        req.decodedToken = jwt.verify(token.split(' ')[1], publicKey);
        next();
    } catch (error) {
        console.log("token verification error: ",error);
        return responseHandler.unauthorizedErrorHandler(res,0,"Unable to verify token");
    }
};

const authLocal = async (req, res, next) => {
    const token = req && req.headers && req.headers.authorization ? `${req.headers.authorization}` : null;
    if(!token) {
        return responseHandler.unauthorizedErrorHandler(res, 0, "No token received.");
    }
    req.decodedToken = jwt.decode(token.split(' ')[1]);
    next();
};

export { auth, authLocal };
