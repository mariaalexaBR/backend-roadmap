interface Product{
    readonly id:number;
    name:string;
    price:number;
    description:string;
}

interface Client{
    readonly id:number;
    name:string;
    email:string;
}

interface InvoiceLine{
    product:Product;
    stock:number;
}

interface Invoice{
    readonly id:number;
    client:Client;
    lines:InvoiceLine[];
    date:Date;
}

const producto1: Product = {
    id:1,
    name:"Manzana",
    price:400,
    description:"Fruta deliciosa"
}

const producto2: Product = {
    id:1,
    name:"Naranja",
    price:300,
    description:"Fruta deliciosa"
}

const client1: Client = {
    id:1,
    name:"Alexa",
    email:"alexabr00@gmail.com"
}

const linea1: InvoiceLine = { product: producto1, stock: 2 };
const linea2: InvoiceLine = { product: producto2, stock: 3 };

const invoice : Invoice = {
    id:1,
    client:client1,
    lines:[linea1, linea2],
    date: new Date()
}


function calculateTotal(invoce: Invoice):number{
    let total=0;
    invoce.lines.forEach(element => {
        total += element.product.price * element.stock;
    });

    return total;
}

console.log(calculateTotal(invoice));
