const nombreProducto : string = "cafe";
const precio : number = 1500;
const enStock : boolean = true;
const etiquetas : [string, number] = ["cafe", 3];

console.log(nombreProducto);
console.log(precio);
console.log(enStock);
console.log(etiquetas);

function calcularIVA(monto:number){
    return monto*0.13;
}

console.log(calcularIVA(100));

function formatearPrecio(monto:number, moneda:string){
    return moneda.concat(monto.toFixed(2));
}

console.log(formatearPrecio(1500, "$"));

console.log(calcularIVA("1500")); // ❌ Error esperado: Argument of type 'string' is not assignable to parameter of type 'number'.
// console.log(calcularIVA("1500"));

const item:[string, number] = ["cafe", 3];