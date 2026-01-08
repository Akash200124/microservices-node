import express from 'express'
import { createSnippet, Getsnippet } from '../controllers/snippet.js'

const router = express.Router()

router.route("/create").post(createSnippet)
router.route("/get").get(Getsnippet)


export default router