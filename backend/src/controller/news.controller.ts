import {NextFunction, Request, Response} from "express";
import News from "../model/news.model";
import mongoose from "mongoose";

const createNews = (req: Request, res: Response, next: NextFunction) => {
	const {title, description} = req.body

	const news = new News({
		_id: new mongoose.Types.ObjectId(),
		title,
		description
	})

	return news
		.save()
		.then((result) => {
			return res.status(201).json({
				message: 'Новость успешно создана',
				news: result
			})
		})
		.catch((err) => {
			return res.status(500).json({
				message: err.message,
				err
			})
		})
}

const getAllNews = (req: Request, res: Response, next: NextFunction) => {
	News.find()
		.exec()
		.then((result) => {
			return res.status(200).json({
				news: result,
				count: result.length
			})
		})
		.catch((err) => {
			return res.status(500).json({
				message: err.message,
				err
			})
		})
}

const getNewsId = (req: Request, res: Response, next: NextFunction) => {
	const id = req.params.id

	return News.findById(id)
		.then((news) => (news ? res.status(200).json({news}) : res.status(404).json({message: 'Новость не найдена'})))
		.catch((err) => res.status(500).json({message: err.message, err}))
}

const updateNews = (req: Request, res: Response, next: NextFunction) => {
	const id = req.params.id

	return News.findById(id)
		.then((news) => {
			if (news) {
				news.set(req.body);

				return news
					.save()
					.then((news) => res.status(201).json({message: 'Новость обновлена', news}))
					.catch((err) => res.status(500).json({message: err.message, err}));
			} else {
				return res.status(404).json({message: 'Новость не найдена'});
			}
		})
		.catch((error) => res.status(500).json({error}));
}

const removeNews = (req: Request, res: Response, next: NextFunction) => {
	const id = req.params.id;

	return News.findByIdAndDelete(id)
		.then((news) => (news ? res.status(201).json({
			message: 'Новость удалена',
			news
		}) : res.status(404).json({message: 'Новость не найдена'})))
		.catch((err) => res.status(500).json({message: err.message, err}));
}

export default {
	getAllNews,
	getNewsId,
	createNews,
	removeNews,
	updateNews
}
