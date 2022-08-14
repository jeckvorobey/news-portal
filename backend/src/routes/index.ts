import express from "express";
import userRoutes from "./user.routes";
import authRoutes from "./auth.routes";

const router = express.Router()

router.use(userRoutes)
router.use(authRoutes)

router.get('/', ((req, res) => {
	res.sendStatus(200)
}))

export default router