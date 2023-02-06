import { Router } from "express";
import { sample_users } from "../data";
import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import { UserModel } from "../models/user.model";

const router = Router();

router.get("/seed", asyncHandler(
    async (req, res) => {
        const usersCount = await UserModel.countDocuments();
        if(usersCount> 0){
            res.send("La semilla se ha creado");
            return;
        }

        await UserModel.create(sample_users);
        res.send("La semilla funcionaaaaaaaaaa");
    }
))

router.post("/login", asyncHandler(
    async (req,res) => {
        const {email, password} = req.body;
        const user = await UserModel.findOne({email, password});
    
        if(user){
            res.send(generateTokenResponse(user));
        }else{
            const BAD_REQUEST = 400;
            res.status(BAD_REQUEST).send("EL usuario o contraseña son inválidos");
        }
    }
))

const generateTokenResponse = (user:any) =>{
    const token = jwt.sign({
        email:user.email, isAdmin:user.isAdmin
    }, "SomeRandomText", {
        expiresIn:"30d"
    });

    user.token = token;
    return user;
}

export default router;