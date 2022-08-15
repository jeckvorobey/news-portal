import express from "express";
import userController from "../controller/user.controller";
import extractJWT from "../middleware/extractJWT";

const router = express.Router()

router.get('/validate', extractJWT, userController.validateToken)
router.post('/reg', userController.register)
router.post('/login', userController.login)
// TODO: chenge export default
export = router