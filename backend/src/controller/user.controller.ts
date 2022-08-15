import {NextFunction, Request, Response} from "express";
import bcryptjs from "bcryptjs"
import mongoose from "mongoose";
import User from "../model/user.model";
import signJWT from "../utils/signJWT";

const validateToken = (req: Request, res: Response, next: NextFunction) => {
	return res.status(200).json({
		message: 'Authorized',
		isAuthorized: true
	})
}

const register = (req: Request, res: Response, next: NextFunction) => {
	const {username, password} = req.body

	bcryptjs.hash(password, 10, (err, hash) => {
		if (err) {
			return res.status(500).json({
				message: err.message,
				error: err
			})
		}

		const _user = new User({
			_id: new mongoose.Types.ObjectId(),
			username,
			password: hash
		})

		return _user
			.save()
			.then((user) => {
				return res.status(201).json({
					user
				})
			})
			.catch(err => {
				return res.status(500).json({
					message: err.message,
					err
				})
			})
	})
}
const login = (req: Request, res: Response, next: NextFunction) => {
	const {username, password} = req.body

	User.find({username})
		.exec()
		.then(user => {
			if (user.length !== 1) {
				return res.status(401).json({
					message: 'Невозможно авторизоваться! Обратитесь к Администратору.'
				})
			}

			bcryptjs.compare(password, user[0].password, (err, success) => {
				if (err) {
					// TODO: RM
					console.log(`login pass ERROR: ${err}`)

					return res.status(401).json({
						message: 'Неверный пароль'
					})
				} else if (success) {
					signJWT(user[0], (err, token) => {
						if (err) {
							// TODO: RM
							console.log(`signJWT login return ERROR: ${err}`)

							return res.status(401).json({
								message: 'Неизвестная ошибка'
							})
						} else if (token) {
							return res.status(200).json({
								isAuthorized: true,
								message: 'Авторизован',
								token,
								user: user[0]
							})
						}
					})
				}
			})
		})
		.catch(err => {
			// TODO: RM
			console.log(`login user.find ERROR: ${err}`)

			return res.status(500).json({
				message: 'Неизвестная ошибка',
				err
			})
		})
}


export default {
	validateToken,
	login,
	register
}