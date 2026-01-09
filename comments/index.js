import express from 'express'
import commnetRoutes from './Routes/comment.js'
import cors from 'cors'

const app = express()
const port = 8001

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(cors(
    {
        origin: ['http://localhost:8000', 'http://localhost:8001','http://localhost:5173'],
    }
))
app.get('/', (req, res) => {
    res.send('i am server 2 !')
})

app.use("/api/v1/comment", commnetRoutes)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})