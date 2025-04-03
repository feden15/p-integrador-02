import ListadoCarrito from "../components/components-carrito/ListadoCarrito"
import useTitulo from "../hooks/useTitulo"
import './Carrito.scss'

const Carrito = () => {

  useTitulo('Carrito')

  return (
    <div className="carrito-container">
      <h1>Productos del carrito</h1>
      <hr />
      <ListadoCarrito />
    </div>
  )
}

export default Carrito