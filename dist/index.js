"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const products_router_1 = require("./routes/products-router");
const addresses_router_1 = require("./routes/addresses-router");
const app = (0, express_1.default)();
const port = 5000;
//Что бы корректно передать данные, с клиента нужно получить json и обработать, для обработки используем bodyParser from 'body-parser и ниже него вызываем для app
app.use(body_parser_1.default.json());
//Подключаем как middleware
app.get('/', (req, res) => {
    let helloMessage = 'Hello Incubator';
    res.send(helloMessage);
});
app.use('/products', products_router_1.productsRouter);
app.use('/addresses', addresses_router_1.addressesRouter);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
