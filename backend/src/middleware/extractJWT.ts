import {NextFunction, Request, Response} from "express";
import jwt from "jsonwebtoken";

// TODO: Перенести в env
const TOKEN_SECRET = 'superSecretPassword'

const extractJWT = (req: Request, res: Response, next: NextFunction) => {
	const token = req.headers.authorization?.split(' ')[1]

	if(token) {
		jwt.verify(token, TOKEN_SECRET, (err, decoded) => {
			if(err) {
				return res.status(404).json({
					message: err.message,
					err
				})
			} else {
				res.locals.jwt = decoded
				next()
			}
		})
	} else {
		return res.status(401).json({
			message: 'Неавторизован'
		})
	}
}

export default extractJWT