import express from "express";
import { loginUser, registerUser } from "../controller/accessControl.js";

const router = express.Router()

router.post('/user', registerUser)
router.post('/login', loginUser)

export default router