import { useContext } from "react"
import TablaFila from "./TablaFila"
import ProductosContext from "../../contexts/ProductosContext"
import './Tabla.scss'

const Tabla = () => {

  const { productos } = useContext(ProductosContext)

  return (
    <table className="tabla-alta">

      <thead>

        <tr>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Stock</th>
          <th>Marca</th>
          <th>Categoría</th>
          <th className="detalles-columna">Detalles</th>
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
  )
}

export default Tabla