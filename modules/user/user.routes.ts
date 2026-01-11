import express, { Router } from 'express';
import { userController } from './user.controller';



const router = express.Router();

router.get("/users", userController.getAllUser)


export const userRouter: Router = router;