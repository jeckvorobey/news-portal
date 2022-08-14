import express from "express";
import userController from "../controller/user.controller";

const router = express.Router()

router.get('/validate', userController.validateToken)
router.post('/reg', userController.register)
router.post('/login', userController.login)

export default router