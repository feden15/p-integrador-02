import { useContext, useState, useEffect } from "react"
import ProductosContext from "../../contexts/ProductosContext"
import './TablaFila.scss'

const TablaFila = ({ producto }) => {

  const { eliminarProductoContext, setProductoAEditar } = useContext(ProductosContext)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : 'auto'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isModalOpen])

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
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
        <td className="columnas-ocultas2">{producto.marca}</td>
        <td className="columnas-ocultas2">{producto.categoria}</td>
        {/* <td className="columnas-ocultas2">{producto.detalles}</td> */}
        <td className="columnas-ocultas1">
          {producto.foto && <img src={producto.foto} alt={producto.nombre} />}
        </td>
        <td>{producto.envio ? '✅' : '❌'}</td>
        <td>
          <div className="acciones-container">
            <button className="boton__ver" onClick={toggleModal}>Ver</button>
            <button className="boton_editar" onClick={() => handleEditar(producto)}>Editar</button>
            <button className="boton_borrar" onClick={() => handleEliminar(producto.id)}>Borrar</button>
          </div>
        </td>
      </tr>

      {isModalOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="card-expanded" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={toggleModal}>×</button>
            <div className="card__image-container">
              {producto.foto && (
                <img
                  className="card__image"
                  src={producto.foto}
                  alt={producto.nombre}
                />
              )}
            </div>
            <div className="card__content">
              <h2 className="card__heading">{producto.nombre}</h2>
              <div className="card__description__modal">
                <p><strong>Precio:</strong> ${producto.precio}</p>
                <p><strong>Marca:</strong> {producto.marca}</p>
                <p><strong>Categoría:</strong> {producto.categoria}</p>
                <p><strong>Detalles:</strong> {producto.detalles}</p>
                <p><strong>Stock:</strong> {producto.stock} u.</p>
                <p><strong>Envío:</strong> {producto.envio ? 'Disponible' : 'No disponible'}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default TablaFila