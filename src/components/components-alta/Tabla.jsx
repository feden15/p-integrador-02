import { useContext, useState } from "react"
import TablaFila from "./TablaFila"
import ProductosContext from "../../contexts/ProductosContext"
import './Tabla.scss'

const Tabla = () => {

  const { productos } = useContext(ProductosContext)

  const [productoSeleccionado, setProductoSeleccionado] = useState(null)

  return (
    <div className="tabla-grande-container">
      <table className="tabla-alta">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
            <th className="columnas-ocultas">Marca</th>
            <th className="columnas-ocultas">Categoría</th>
            <th className="columnas-ocultas">Detalles</th>
            <th>Foto</th>
            <th>Envío</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            productos && productos.map((producto) => (
              <TablaFila producto={producto} key={producto.id} />
            ))
          }
        </tbody>
      </table>

      {/* Modal fuera de la tabla */}
      {productoSeleccionado && (
        <div className="modal">
          <div className="modal-contenido">
            <h3>{productoSeleccionado.nombre}</h3>
            <p><strong>Marca:</strong> {productoSeleccionado.marca}</p>
            <p><strong>Precio:</strong> ${productoSeleccionado.precio}</p>
            <p><strong>Stock:</strong> {productoSeleccionado.stock} unidades</p>
            <p><strong>Detalles:</strong> {productoSeleccionado.detalles}</p>
            <p><strong>Categoría:</strong> {productoSeleccionado.categoria}</p>
            {productoSeleccionado.foto && (
              <img src={productoSeleccionado.foto} alt={productoSeleccionado.nombre} />
            )}
            <button onClick={() => setProductoSeleccionado(null)}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Tabla