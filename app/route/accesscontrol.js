import express from "express";
import { loginUser, registerUser } from "../controller/AccessControl.js";

const router = express.Router()

router.post('/user', registerUser)
router.post('/login', loginUser)

export default router