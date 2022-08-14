import dotenv from "dotenv";
import express from "express";
import connectDb from "./utils/connectDb";
import routers from './routes'
import bodyParser from "body-parser";

const app = express()
dotenv.config({path: '../env'})

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.json());
app.use(routers)

const port: number = Number(process.env.PORT) || 3001

app.listen(port, ():void => {
	console.log(`Сервер запущен на http://localhost:${port}`)
	connectDb().then()
})