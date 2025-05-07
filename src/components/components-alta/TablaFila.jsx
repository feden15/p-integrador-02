import useContext from "react"
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
    <tr className="fila_producto">
      <td>{producto.nombre}</td>
      <td>${producto.precio}</td>
      <td>{producto.stock} u.</td>
      <td className="columnas-ocultas">{producto.marca}</td>
      <td className="columnas-ocultas">{producto.categoria}</td>
      <td className="columnas-ocultas">{producto.detalles}</td>
      <td>
        {producto.foto && <img src={producto.foto} alt={producto.nombre} />}
      </td>
      <td>{producto.envio ? '✅' : '❌'}</td>
      <td>
        <div className="acciones-container">
          <button className="boton__ver">Ver</button>
          <button className="boton_editar" onClick={() => handleEditar(producto)}>Editar</button>
          <button className="boton_borrar" onClick={() => handleEliminar(producto.id)}>Borrar</button>
        </div>
      </td>
    </tr>
  )
}

export default TablaFila