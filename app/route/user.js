import express from "express";
import { deleteUser, followUser, getAllUsers, getUser, updateUser } from "../controller/User.js";

const router = express.Router();

router.get('/:id', getUser)
router.get('/', getAllUsers)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)
router.put('/:id/follow', followUser)
export default router