import mongoose from "mongoose";

async function connectDb(){
	const uriDb: string = 'mongodb://localhost:27017/portal_db'
	try {
		await mongoose.connect(uriDb, )
		console.log(`mongo connected`)
	} catch (e) {
		console.log(`mongo conn err >>> ${e}`)
	}
}

export default connectDb