import {Request, Response, Router} from 'express'
import {productsRep} from '../repositories/products-repository';


export const productsRouter = Router({})
//params - URI params
//query - Query params
productsRouter.get('/', (req: Request, res: Response) => {
    const products = productsRep.getProduct()
    res.send(products)
})
//:productId фича из express, URI параметры, которые мы можем достать из request
productsRouter.get('/:productId', (req: Request, res: Response) => {
    const product = productsRep.getProductForId(+req.params.productId)
    if (typeof product === 'number') {
        res.sendStatus(product)
    } else {
        res.send(product)
    }
})
productsRouter.delete('/:productId', (req: Request, res: Response) => {
    const resStatus = productsRep.deleteProduct(+req.params.productId)
    res.sendStatus(resStatus)

})
productsRouter.post('/', (req: Request, res: Response) => {
    const result = productsRep.addProduct(req.body)
    if (typeof result === 'number') {
        res.sendStatus(result)
    } else {
        res.sendStatus(result.resStatus)
        res.send(result.product)
    }
})
productsRouter.put('/:productId', (req: Request, res: Response) => {
    const result = productsRep.updateProduct(+req.params.productId, req.body.title)
    if (typeof result === 'number') {
        res.sendStatus(result)
    } else {
        res.sendStatus(result.resStatus)
        res.send(result.product)
    }
})