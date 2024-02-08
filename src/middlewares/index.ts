import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { TokenInterface, errorResponse } from "../helpers";
import User from "../models/User";
import createHttpError from "http-errors";

export interface User {
    name : string;
    email : string;
    password : string;
    token : string;
    checked : boolean;
}

export const checkAuth = async (req: Request, res: Response, next: NextFunction) => {

    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        try {

            token = req.headers.authorization.split(" ")[1];


            const decoded = jwt.verify(token, process.env.JWT_SECRET as string);

            req.user = await User.findById((decoded as TokenInterface).id).select(
                    "-password -checked -token -createdAt -updatedAt -__v"
                  );
                 


            
        } catch (error) {
            return errorResponse(res, error, "VERIFY-JWT")
        }
    }

    if(!token) {
        const error = createHttpError(401, "Token inválido")
        return errorResponse(res, error, "VERIFY-JWT")
 
    }

    next()
}