import { snippet } from "../database/index.js"
import crypto from "crypto"


const createSnippet = async (req, res) => {
    const id = crypto.randomBytes(4).toString('hex')
    const { title, code } = req.body

    // create in snippet database 
    snippet[id] = {
        id,
        title,
        code
    }

    return res.status(201).json({
        sucess: true,
        snippet: snippet[id],
        message: "Snippet created successfully."
    })
}

const Getsnippet = async (_, res) => {
    return res.status(200).json(snippet)
}

export { createSnippet, Getsnippet }