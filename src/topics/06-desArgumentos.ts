// 06-desArgumentos.ts

// Definición de la interfaz Producto
export interface Producto {
    descripcion: string;
    precio: number;
}

// Definición de la interfaz ICalcularCompra
export interface ICalcularCompra {
    impuesto: number;
    productos: Producto[];
}

// Función para calcular el total de la compra con impuesto
export function calcularCompra(options: ICalcularCompra): [number, number] {
    let total = 0;
    options.productos.forEach(productito => {
        total += productito.precio;
    });

    const totalConImpuesto = total * (1 + options.impuesto);
    return [total, totalConImpuesto];
}