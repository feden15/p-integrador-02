import { useContext } from "react";
import CarritoContext from "../../contexts/CarritoContext.jsx";
import './ItemCarrito.scss'


const ItemCarrito = ({ producto }) => {

    const { eliminarProductoDelCarritoContext } = useContext(CarritoContext)

    const handleEliminar = (id) => {
        eliminarProductoDelCarritoContext(id)
    }

    return (
        <tr className="item-carrito">
            <td>
                {producto.foto && (
                    <img
                        src={producto.foto}
                        alt={producto.nombre}
                        width="50px"
                    />
                )}
            </td>
            <td>{producto.nombre}</td>
            <td>{producto.cantidad}</td>
            <td>$ {producto.precio * producto.cantidad}</td>
            <td>
                <button onClick={() => handleEliminar(producto.id)}>Eliminar</button>
            </td>
        </tr>
    )
}

export default ItemCarrito