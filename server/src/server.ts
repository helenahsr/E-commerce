import express, { Request, Response } from 'express'

const app = express();
app.use(express.json())

app.get('/', (req, res) => {
    res.send('yooo');
})

app.post('/:nome', (req: Request, res: Response) => {
    res.json(req.body)
})

app.listen(3000);