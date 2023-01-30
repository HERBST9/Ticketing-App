import { NextFunction, Request, Response } from "express";
import { notAuthorized } from "../errors/notAuthorized";



export const requireAuth = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if(!req.currentUser) {
        throw new notAuthorized()
    }
    next()
}