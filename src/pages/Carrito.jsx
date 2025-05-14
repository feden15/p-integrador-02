import ListadoCarrito from "../components/components-carrito/ListadoCarrito"
import useTitulo from "../hooks/useTitulo"
import './Carrito.scss'

const Carrito = () => {

  useTitulo('Carrito')

  return (
    <div className="carrito-container">
      <h2>tu carrito</h2>
      <ListadoCarrito />
    </div>
  )
}

export default Carrito