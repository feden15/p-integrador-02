import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const CarritoContext = createContext()

const CarritoProvider = ({ children }) => {

  const [carrito, agregarAlCarrito, eliminarDelCarrito, limpiarCarrito] = useLocalStorage("carrito", [])

  function elProductoEstaEnElCarrito(producto) {

    const nuevoArray = carrito.filter(prod => prod.id === producto.id)

    return nuevoArray.length

  }

  function obtenerProductoDeCarrito(producto) {

    return carrito.find(prod => prod.id === producto.id)

  }

  const agregarProductoAlCarritoContext = (producto) => {

    if (!elProductoEstaEnElCarrito(producto)) {
      producto.cantidad = 1
      agregarAlCarrito(producto)
    } else {
      const productoDeCarrito = obtenerProductoDeCarrito(producto)
      productoDeCarrito.cantidad++
      window.localStorage.setItem('carrito', JSON.stringify(carrito))
    }

  }

  const data = {
    carrito,
    agregarProductoAlCarritoContext: agregarAlCarrito,
    limpiarCarrito,
    eliminarDelCarrito
  }

  return <CarritoContext.Provider value={data}>{children}</CarritoContext.Provider>

}

export { CarritoProvider }
export default CarritoContext