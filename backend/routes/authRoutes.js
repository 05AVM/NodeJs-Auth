import { login, logout, signup } from "../controllers/authController.js"
import express from "express"
const router=express.Router()

router.get("/signup",signup)
router.get("/login",login)
router.get("/logout",logout)
const authRoutes=router;

export default authRoutes;