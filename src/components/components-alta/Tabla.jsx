import { useContext } from "react"
import TablaFila from "./TablaFila"
import ProductosContext from "../../contexts/ProductosContext"


const Tabla = () => {

  const { productos } = useContext(ProductosContext)

  return (
    <table>

      <thead>

        <tr>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Stock</th>
          <th>Marca</th>
          <th>Categoría</th>
          <th>Detalles</th>
          <th>Foto</th>
          <th>Envío</th>
          <th>Acciones</th>
        </tr>

      </thead>

      <tbody>

        <tr>
          <td>
            {
              productos && productos.map((producto) => (
                <TablaFila producto={producto} key={producto.id} />
              ))
            }
          </td>
        </tr>

      </tbody>

    </table>
  )
}

export default Tabla