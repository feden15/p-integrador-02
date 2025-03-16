import { useContext } from "react"
import CarritoContext from "../contexts/CarritoContext"
import ItemCarrito from "./ItemCarrito"
import './ListadoCarrito.scss'

const ListadoCarrito = () => {

    const { carrito } = useContext(CarritoContext)

    const handleComprar = () => {
        agregarProductoAlCarritoContext()
    }

    const handleLimpiarCarrito = () => {
        limpiarCarrito()
    }

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
            </table>
            <hr />
            {!carrito.length <= 0 && (
                <>
                    <button onClick={handleLimpiarCarrito}>Vaciar Carrito</button>
                    <button onClick={handleComprar}>Comprar</button>
                </>
            )
            }
        </>
    )
}

export default ListadoCarrito