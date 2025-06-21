import express, {Request, Response} from 'express'
import bodyParser from 'body-parser';
import {productsRouter} from './routes/products-router';
import {addressesRouter} from './routes/addresses-router';

const app = express()
const port = 5000


//Что бы корректно передать данные, с клиента нужно получить json и обработать, для обработки используем bodyParser from 'body-parser и ниже него вызываем для app
app.use(bodyParser.json())
//Подключаем как middleware
app.get('/', (req: Request, res: Response) => {

    let helloMessage = 'Hello Incubator'
    res.send(helloMessage)
})

app.use('/products', productsRouter)
app.use('/addresses', addressesRouter)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})