const products = [{id: 1, title: 'tomato'}, {id: 2, title: 'orange'}]

export const productsRep = {
    getProduct() {
        return products
    },
    getProductForId(id: number) {
        const product = products.find(el => el.id === id)
        if (product) {
            return (product)
        } else {
            return (404)
        }
    },
    deleteProduct(id: number) {
        const productIndex = products.findIndex(el => el.id === id)
        if (productIndex !== -1) {
            products.splice(productIndex, 1)
            return (204)
        } else {
            return (404)
        }
    },
    addProduct(body: { title: string }) {
        if (body) {
            const product = {id: +(new Date()), title: body.title}
            products.push(product)
            return {resStatus: 201, product}
        } else {
            return (404)
        }
    },
    updateProduct(id: number, title: string) {
        const product = products.find(el => el.id === id)
        if (product) {
            product.title = title
            return {resStatus: 201, product}
        } else {
            return (404)
        }

    }
}


