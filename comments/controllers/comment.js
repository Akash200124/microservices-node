import  {comments}  from "../database/comment.js"
import crypto from "crypto";


const createComment = async (req, res) => {

    const id = crypto.randomBytes(4).toString('hex')

    const { comment } = req.body

    comments[id] = {
        id,
        comment
    }

    res.status(201).json({
        sucess: true,
        comment: comments[id],
        message: "Comment created successfully."
    })

}

const getCommentById = async (_, res) => {
    return res.status(200).json(comments)
}


export { createComment, getCommentById }