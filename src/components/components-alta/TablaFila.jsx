import useContext, { useEffect, useState } from "react"
import ProductosContext from "../../contexts/ProductosContext"
import './TablaFila.scss'

const TablaFila = ({ producto }) => {

  const { eliminarProductoContext, setProductoAEditar } = useContext(ProductosContext)

  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    };
  }, [isExpanded])

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  const handleEditar = (producto) => {
    setProductoAEditar(producto)
  }

  const handleEliminar = (id) => {
    eliminarProductoContext(id)
  }

  return (

    <>
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
            <button className="boton__ver" onClick={toggleExpand}>Ver</button>
            <button className="boton_editar" onClick={() => handleEditar(producto)}>Editar</button>
            <button className="boton_borrar" onClick={() => handleEliminar(producto.id)}>Borrar</button>
          </div>
        </td>
      </tr>

      {isExpanded && (
        <tr>
          <td colSpan="9">
            <div className="modal">
              <div className="modal-contenido">
                <h3>{producto.nombre}</h3>
                <p><strong>Marca:</strong> {producto.marca}</p>
                <p><strong>Precio:</strong> ${producto.precio}</p>
                <p><strong>Stock:</strong> {producto.stock} unidades</p>
                <p><strong>Detalles:</strong> {producto.detalles}</p>
                <p><strong>Categoría:</strong> {producto.categoria}</p>
                {producto.foto && (
                  <img src={producto.foto} alt={producto.nombre} />
                )}
                <button onClick={toggleExpand}>Cerrar</button>
              </div>
            </div>
          </td>
        </tr>
      )}
    </>

  )
}

export default TablaFila