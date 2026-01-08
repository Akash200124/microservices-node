import express from 'express'
import { createComment, getCommentById } from '../controllers/comment.js'

const router = express.Router();

router.route("/:id/create").post(createComment)
router.route("/:id/get").get(getCommentById)

export default router