import { productos } from "../data/info"
import { Producto } from "../domain/entities/producto"

export function getProducto(id: number): Promise<Producto> {
    console.log("----------------------------------")
    console.log("Llamada a la funcion GET PRODUCTO")
    console.log("----------------------------------")

    const Promesa: Promise<Producto> = new Promise((resolve, reject) => {
        setTimeout(() => {
            const producto = productos.find(e => e.id === id)
            if (producto) {
                resolve(producto)
            } else {
                reject(`Producto con id ${id} no existe`)
            }
        }, 800)
    })

    return Promesa
}
