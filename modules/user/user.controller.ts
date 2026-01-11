import { Request, Response } from "express";
import { userServices } from "./user.service"


const getAllUser =async(req:Request , res:Response)=>{
    try {
        const result = await userServices.getAllUser();
        res.status(200).json(result)        
    } catch (e) {
        const errorMessage = (e instanceof Error) ? e.message : "User Not Found!"
        res.status(400).json({
            error: errorMessage,
            details: e
    })
}
}
export const userController ={
    getAllUser
}