import express from 'express'
import cors from 'cors'


const app = express();

app.use(cors())

app.use('/login', (req, res) => {
    res.send({
        token: 'token'
    })
})

const port = 8080;

app.listen(port, () => console.log(`Api running on port ${port}`))
