import mongoose, {Schema} from "mongoose";
import INews from "../interfaces/news.interface";

const NewsSchema: Schema = new Schema({
	title: {type: String, required: true},
	description: {type: String, required: true}
},{
	timestamps: true
})

export default mongoose.model<INews>('news', NewsSchema)