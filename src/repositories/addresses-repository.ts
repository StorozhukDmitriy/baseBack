const addresses = [{id: 1, value: 'Lenina 12'}, {id: 2, value: 'Kirova 11'}]


export const addressRep = {
    getAddresses() {
        return addresses
    },
    getAddressesForId(id: number) {
        const address = addresses.find(el => el.id === id)
        if (address) {
            return (address)
        } else {
            return (404)
        }
    },
    deleteAddress(id: number) {
        const addressIndex = addresses.findIndex(el => el.id === id)
        if (addressIndex !== -1) {
            addresses.splice(addressIndex, 1)
            return (204)
        } else {
            return (404)
        }
    },
    addAddress(body: { value: string }) {
        if (body) {
            const newAddress = {id: +(new Date()), value: body.value}
            addresses.push(newAddress)
            return {status: 201, newAddress}
        } else {
            return (404)
        }
    },
    updateAddress(id: number, value: string) {
        const updateAddress = addresses.find(el => el.id === id)
        if (updateAddress) {
            updateAddress.value = value
            return {status: 201, updateAddress}
        } else {
            return (404)
        }
    }
}