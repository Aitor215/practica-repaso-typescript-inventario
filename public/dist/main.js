import { getProducto } from "./service/getProductoService.js";
const btn = document.getElementById("productoNumber");
const salida = document.getElementById("producto");
function getIdFromButton() {
    console.log("---------------------------------------");
    console.log("Llamada a la función GET ID FROM BUTTON");
    console.log("---------------------------------------");
    const input = prompt("Introduce un número de producto");
    const id = Number(input);
    if (Number.isNaN(id)) {
        alert("No has introduccido un numero");
        return;
    }
    return id;
}
async function findProducto(id) {
    console.log('---------------------------------------');
    console.log('Llamada a la funcion FIND PRODUCTO');
    console.log('--------------------------------------');
    if (!salida) {
        console.log('------------------------');
        console.log('No ha habia una salida');
        console.log('------------------------');
        return;
    }
        getProducto(id)
            .then(producto => {
                console.log(producto, 'producto');
                salida.textContent = `El producto buscado es: ${producto.nombre} con stock de ${producto.stock}`;
            })
            .catch((error) => {
                console.log(error, 'ERROR');
                salida.textContent = typeof error === 'string' ? error : "Ha ocurrido un error";
            });
        }
if (btn) {
    btn.addEventListener("click", () => {
        try {
            const id = getIdFromButton();
            if (id !== undefined)
                findProducto(id);
        }
        catch (error) {
            const message = error instanceof Error ? error.message : "Error inesperado";
            if (salida)
                salida.textContent = message;
        }
    });
}
