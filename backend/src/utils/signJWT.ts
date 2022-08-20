import jwt from "jsonwebtoken";
import IUser from "../interfaces/user.interface";
import {config} from "../../config/config";

const signJWT = (user: IUser, callback: (err: Error | null, token: string | undefined) => void ): void => {
	const currentTime: number = new Date().getTime()
	const validUntilDate = currentTime + config.TOKEN_TIME * 100000
	const lifeTime = Math.floor(validUntilDate / 1000)
	try {
		jwt.sign({
			username: user.username
		}, config.TOKEN_SECRET, {
			issuer: config.TOKEN_ISSUER,
			algorithm: 'HS256',
			expiresIn: lifeTime
			},
			(err, token) => {
			if (err) {
				callback(err, undefined)
			} else if (token) {
				callback(null, token)
			}
		})
	} catch (err: any) {
		console.log(`signJWT Error: ${err}`)
		callback(err, undefined)
	}
}

export default signJWT