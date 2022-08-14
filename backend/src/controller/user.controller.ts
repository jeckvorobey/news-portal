import { NextFunction, Request, Response } from "express";
import bcryptjs from "bcryptjs"

const NAMESPACE = 'User'

const validateToken = (req: Request, res: Response, next: NextFunction) => {
	res.sendStatus(200).json({
		messages: 'Authorized'
	})
}

const register = (req: Request, res: Response, next: NextFunction) => {
	const {login, password} = req.body

	bcryptjs.hash(password, 10, (err, hash) => {
		if(err) {
			return res.sendStatus(500).json({
				messages: err.message,
				error: err
			})
		}

		// TODO: сохранить пользователя в БД
	})
}
const login = (req: Request, res: Response, next: NextFunction) => {}



export default {
	validateToken,
	login,
	register
}