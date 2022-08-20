import mongoose from "mongoose";
import {config} from "../../config/config";

function mongo(){


	mongoose
		.connect( config.MONGO_URI)
		.then(() => {
			console.log(`mongo connected`)
		})
		.catch((err) => {
			console.log(`mongo conn err >>> ${err}`)
		})
}

export default mongo