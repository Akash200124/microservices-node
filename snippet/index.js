import express from 'express'
import SnippetRouter from './Routes/snippets.js'
import cors from 'cors'

const app = express()
const port = 8000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(cors({
        origin: ['http://localhost:8000', 'http://localhost:8001','http://localhost:5173'],
    }))

app.use("/api/v1/snippet", SnippetRouter)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})