import { useContext } from "react"
import ProductosContext from "../../contexts/ProductosContext"
import './TablaFila.scss'

const TablaFila = ({ producto }) => {

  const { eliminarProductoContext, setProductoAEditar } = useContext(ProductosContext)

  const handleEditar = (producto) => {
    setProductoAEditar(producto)
  }
  
  const handleEliminar = (id) => {
    eliminarProductoContext(id)
  }

  return (

    <tr>
      <td>{producto.nombre}</td>
      <td>${producto.precio}</td>
      <td>{producto.stock} u.</td>
      <td>{producto.marca}</td>
      <td>{producto.categoria}</td>
      <td className="detalles-columna">{producto.detalles}</td>
      <td>
        <img src={producto.foto} alt={producto.nombre} />
      </td>
      <td>{producto.envio ? '✅' : '❌'}</td>
      <td>
        <button className="boton__ver">Ver</button>
        <button className="boton_editar" onClick={() => handleEditar(producto)}>Editar</button>
        <button className="boton_borrar" onClick={() => handleEliminar(producto.id)}>Borrar</button>
      </td>
    </tr>

  )
}

export default TablaFila