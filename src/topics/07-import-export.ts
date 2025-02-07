// 07-import-export.ts
import { Producto, ICalcularCompra, calcularCompra } from './06-desArgumentos';

// Definición de productos
const telefono: Producto = {
    descripcion: 'Nokia A1',
    precio: 150.0
};

const tableta: Producto = {
    descripcion: 'Ipad Air',
    precio: 150.0
};

// Array de productos
const compras: Producto[] = [telefono, tableta];

// Opciones para calcular la compra
const opcionesCompra: ICalcularCompra = {
    impuesto: 0.15, // 15% de impuesto
    productos: compras
};

// Calcular total y total con impuesto
const [total, totalConImpuesto] = calcularCompra(opcionesCompra);

// Mostrar resultados en la consola
console.log('Total:', total);
console.log('Total con impuesto:', totalConImpuesto);