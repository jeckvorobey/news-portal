import mongoose from "mongoose";

function mongo(){
	// TODO: перенести в env
	const uriDb: string = 'mongodb+srv://admin:admin@cluster0.rqn9mfa.mongodb.net/?retryWrites=true&w=majority'

	mongoose
		.connect(uriDb)
		.then((result) => {
			console.log(`mongo connected`)
		})
		.catch((err) => {
			console.log(`mongo conn err >>> ${err}`)
		})
}

export default mongo