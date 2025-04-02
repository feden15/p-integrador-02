import { useContext } from "react"
import CarritoContext from "../contexts/CarritoContext"
import ItemCarrito from "./ItemCarrito"
import './ListadoCarrito.scss'

const ListadoCarrito = () => {

    const { carrito } = useContext(CarritoContext)

    const handleComprar = () => {
        // simulo que compré lo del carrito
        console.log("Compra realizada con éxito")
        limpiarCarrito()
    }

    const handleLimpiarCarrito = () => {
        limpiarCarrito()
    }

    const total = carrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0)

    return (
        <>
            <table className='tabla-carrito'>
                <thead>
                    <tr>
                        <th>Foto</th>
                        <th>Nombre</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        carrito.length <= 0 ? (
                            <tr>
                                <td colSpan={5} style={{ textAlign: 'center' }}>No se han agregado productos</td>
                            </tr>
                        ) : (
                            carrito.map((producto, idx) => (
                                <ItemCarrito key={idx} producto={producto} />
                            ))
                        )
                    }

                </tbody>
                <tfoot>
                    <tr>
                        <th>Total:</th>
                    </tr>
                </tfoot>
            </table>
            <hr />
            {carrito.length < 0 && (
                <>
                    <h3>Total a pagar: ${total.toFixed(2)}</h3>
                    <button onClick={handleLimpiarCarrito}>Vaciar Carrito</button>
                    <button onClick={handleComprar}>Comprar</button>
                </>
            )
            }
        </>
    )
}

export default ListadoCarrito