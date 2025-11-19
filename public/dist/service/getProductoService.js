import { productos } from "../data/info.js";
export function getProducto(id) {
    console.log("----------------------------------");
    console.log("Llamada a la funcion GET PRODUCTO");
    console.log("----------------------------------");
    const Promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            const producto = productos.find(e => e.id === id);
            if (producto) {
                resolve(producto);
            }
            else {
                reject(`Producto con id ${id} no existe`);
            }
        }, 800);
    });
    return Promesa;
}
