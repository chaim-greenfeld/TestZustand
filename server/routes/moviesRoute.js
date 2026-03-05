import { readData } from "../controllers/readListOfMovies.js"
import express from 'express'

const router = express.Router()


router.get('/', readData)


export default router;