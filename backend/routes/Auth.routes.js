import express from "express";
import { Register, updateProfile, Login, Logout } from "../controllers/Auth.controller.js";
import upload from '../middleware/Multer.middleware.js';
import { isLogin } from "../middleware/isLogin.middleware.js";


const AuthRoutes=express.Router();

AuthRoutes.post("/register", upload.single('profile'),  Register)
AuthRoutes.post("/login",Login)
AuthRoutes.post("/logout",Logout)
AuthRoutes.patch('/profile/:id', upload.single('profile'),isLogin, updateProfile)


export default AuthRoutes;