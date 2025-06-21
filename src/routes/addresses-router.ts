import {Request, Response, Router} from 'express';
import {addressRep} from '../repositories/addresses-repository';

const addresses = [{id: 1, value: 'Lenina 12'}, {id: 2, value: 'Kirova 11'}]
export const addressesRouter = Router({})

addressesRouter.get('/', (req: Request, res: Response) => {
    res.send(addressRep.getAddresses())
})

addressesRouter.get('/:addressId', (req: Request, res: Response) => {
    const result = addressRep.getAddressesForId(+req.params.addressId)
    if (typeof result === 'number') {
        res.sendStatus(result)
    } else {
        res.send(result)
    }
})
addressesRouter.delete('/:addressId', (req: Request, res: Response) => {
    const resStatus = addressRep.deleteAddress(+req.params.addressId)
    res.sendStatus(resStatus)
})
addressesRouter.post('/', (req: Request, res: Response) => {
    const result = addressRep.addAddress(req.body)
    if (typeof result === 'number') {
        res.sendStatus(result)
    } else {
        res.send(result.newAddress)
        res.sendStatus(result.status)
    }

})
addressesRouter.put('/:addressId', (req: Request, res: Response) => {
    const result = addressRep.updateAddress(+req.params.addressId, req.body.value)
    if (typeof result === 'number') {
        res.sendStatus(result)
    } else {
        res.send(result.updateAddress)
        res.sendStatus(result.status)
    }
})