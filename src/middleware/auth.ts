import { NextFunction, Request, Response } from "express";
import { Role } from "../generated/prisma/enums";
import jwt, { JwtPayload } from "jsonwebtoken"

declare global{
    namespace Express{
        interface Request{
            user:JwtPayload
        }
    }
}

const auth = (roles?: Role) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const token = req.headers.authorization?.split(" ")[1];

        if (!token) res.send("Please Provide token")
        try {
            const decode = jwt.verify(token as string, 'very secret')
            // console.log(decode)
            req.user=decode as JwtPayload //use decode info globally. whole application
            if(!decode) return res.send("Unauthorized")
            next()
        }
        catch (error) {
            console.log(error)
        }
    }
}

export default auth;