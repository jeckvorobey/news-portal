import express from "express";
import newsController from "../controller/news.controller";
import extractJWT from "../middleware/extractJWT";

const router = express.Router()

router.get('/', newsController.getAllNews)
router.get('/:id', newsController.getNewsId)
router.post('/create', extractJWT, newsController.createNews)
router.patch('/:id', extractJWT, newsController.updateNews)
router.delete('/:id', extractJWT, newsController.removeNews)


export = router