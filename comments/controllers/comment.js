import { comments } from "../database/comment.js"
import crypto from "crypto";


const createComment = async (req, res) => {

    const id = crypto.randomBytes(4).toString('hex')

    const { text } = req.body
    const snippedtId = req.params.id


    const comment = comments[snippedtId] || []

    comment.push({
        id,
        text
    })

    comments[snippedtId] = comment

    res.status(201).json({
        sucess: true,
        comment: {id, text},
        message: "Comment created successfully."
    })

}

const getCommentById = async (req, res) => {

    const id = req.params.id
    console.log(id)
    return res.status(200).json(comments [id] || [])
}


export { createComment, getCommentById }