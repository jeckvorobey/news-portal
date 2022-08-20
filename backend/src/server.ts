import http from "http";
import express from "express";
import {config} from "../config/config";
import mongo from "./utils/mongo";
import userRoutes from "./routes/user.routes";
import newsRoutes from "./routes/news.routes";
import bodyParser from "body-parser";

const router = express()

// подключение к MongoDB
mongo()

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

	if (req.method == 'OPTIONS') {
		res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
		return res.status(200).json({});
	}

	next();
});
// Роутинг
router.use(userRoutes);
router.use(newsRoutes)

const port: number = config.PORT || 3001

const httpServer = http.createServer(router);

httpServer.listen(port, ():void => {
	console.log(`Сервер запущен на порту: ${port}`)
})