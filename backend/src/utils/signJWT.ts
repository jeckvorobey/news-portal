import jwt from "jsonwebtoken";
import IUser from "../interfaces/user.interface";

// TODO: удалить как будет настроен env и удалить лог
const tokenTime = Number(process.env.TOKEN_TIME) || 3600
const TOKEN_SECRET = 'superSecretPassword'
const TOKEN_ISSUER = 'isUser'

const signJWT = (user: IUser, callback: (err: Error | null, token: string | undefined) => void ): void => {
	const currentTime: number = new Date().getTime()
	console.log(`CT: ${currentTime}`)
	const validUntilDate = currentTime + tokenTime * 100000
	console.log(`VUD: ${validUntilDate}`)
	const tt = Math.floor(validUntilDate / 1000)
	console.log(`TT: ${tt}`)


	console.log(`JWT: ${user.username}`)
	const TOKEN_SECRET = 'superSecretPassword'
	const TOKEN_ISSUER = 'isUser'
	try {
		jwt.sign({
			username: user.username
		}, TOKEN_SECRET, {
			issuer: TOKEN_ISSUER,
			algorithm: 'HS256',
			expiresIn: tt
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