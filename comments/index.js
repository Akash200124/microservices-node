import express from 'express'
import commnetRoutes from './Routes/comment.js'

const app = express()
const port = 8001

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('i am server 2 !')
})

app.use("/api/v1/comment", commnetRoutes)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})