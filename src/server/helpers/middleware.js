"use strict";

import jwt from "jsonwebtoken";
const RSA_PUBLIC_KEY = fs.readFileSync(__dirname + '/keys/jwtRS256.key.pub');

module.exports = {
    ensureAuthenticated(req, res, next) {
        let token = req.headers["x-access-token"] || req.headers["authorization"];
        if (token) {
            if (token.startsWith("Bearer ")) {
                token = token.slice(7, token.length);
            }
            jwt.verify(token, RSA_PUBLIC_KEY, { algorithms: ["RS256"] }, (err, decoded) => {
                if (err) {
                    res.status(401);
                    return next(new Error("Session has expired. Please login"));
                } else {
                    req.decoded = decoded;
                    return next();
                }
            });
        } else {
            res.status(401);
            return next(new Error("Login required"));
        }
    },
};
