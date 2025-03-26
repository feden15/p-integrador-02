import { useContext } from 'react'
import CarritoContext from '../contexts/CarritoContext'


const ItemCarrito = ({producto}) => {

    const { eliminarProductoDelCarritoContext } = useContext(CarritoContext)

    const handleEliminar = (producto) => {
        eliminarProductoDelCarritoContext(producto)
    }

  return (
    <tr>
        <td>
            <img src={producto.foto} alt={producto.nombre} width="50px" />
        </td>
        <td>{producto.nombre}</td>
        <td>{producto.cantidad}</td>
        <td>{producto.precio}</td>
        <td>
            <button onClick={() => handleEliminar(producto)}>Eliminar</button>
        </td>
    </tr>
  )
}

export default ItemCarrito