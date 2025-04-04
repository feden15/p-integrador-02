import { useContext } from "react"
import CarritoContext from "../../contexts/CarritoContext"
import ItemCarrito from "./ItemCarrito"
import './ListadoCarrito.scss'

const ListadoCarrito = () => {

    const { carrito, limpiarCarritoContext, guardarCarritoBackendContext } = useContext(CarritoContext)

    const handleComprar = () => {
        guardarCarritoBackendContext()
        limpiarCarritoContext()
    }

    const handleLimpiarCarrito = () => {
        limpiarCarritoContext()
    }

    const total = carrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0)

    const cantidadTotal = carrito.reduce((acc, producto) => acc + producto.cantidad, 0)

    return (
        <>
            <table className='tabla-carrito'>
                <thead>
                    <tr>
                        <th>Foto</th>
                        <th>Nombre</th>
                        <th>Cantidad</th>
                        <th>Sub-total</th>
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
            </table>

            {carrito.length > 0 && (
                <div className="carrito-controls">
                    <div className="info-total">
                        <h3>Productos: {cantidadTotal}</h3>
                        <h3>Total a pagar: $ {total.toFixed(2)}</h3>
                    </div>
                    <div className="botones-carrito">
                        <button className="vaciar" onClick={handleLimpiarCarrito}>Vaciar Carrito</button>
                        <button className="comprar" onClick={handleComprar}>Comprar</button>
                    </div>
                </div>
            )}
        </>
    )
}

export default ListadoCarrito