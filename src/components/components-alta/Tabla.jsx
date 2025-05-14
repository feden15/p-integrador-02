import { useContext } from "react"
import TablaFila from "./TablaFila"
import ProductosContext from "../../contexts/ProductosContext"
import './Tabla.scss'

const Tabla = () => {

  const { productos } = useContext(ProductosContext)

  return (
    <div className="tabla-container">
      <table className="tabla-alta">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
            <th className="columnas-ocultas2">Marca</th>
            <th className="columnas-ocultas2">Categoría</th>
            {/* <th className="columnas-ocultas2">Detalles</th> */}
            <th className="columnas-ocultas1">Foto</th>
            <th>Envío</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            productos && productos.map((producto) => (
              <TablaFila
                producto={producto}
                key={producto.id}
              />
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Tabla