import { createContext, useEffect, useState } from "react";
import { peticionesHttp } from "../helpers/peticiones-http";

const ProductosContext = createContext()

const ProductosProvider = ( { children } ) => {

    const url = import.meta.env.VITE_BACKEND_PRODUCTOS

    const [productos, setProductos] = useState(null)
    const [productoAEditar, setProductoAEditar] = useState(null)

    useEffect(() => {
        getAllProductros()
    }, [])

    const getAllProductros = async () => {

        try {

            const prods = await peticionesHttp(url, {})

            setProductos(prods)

        } catch (error) {
            console.error('[getAllProductos]', error)
        }
    }

    const crearProductoContext = async (productoNuevo) => {

        try {

            delete productoNuevo.id // no nos sirve el ID que trae porque el Back crea uno nuevo

            const options = {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(productoNuevo)
            }

            const prods = await peticionesHttp(url, options)

            const nuevoEstadoProductos = [...productos, prods]

            setProductos(nuevoEstadoProductos)
            
        } catch (error) {
            console.errlr('[crearProductoContext]', error);            
        }

    }

    const actualizarProductoContext = async (productoAEditar) => {
        
        try {

            const options = {
                method: 'PUT',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(productoAEditar)
            }

            const urlActualizar = url + productoAEditar.id

            const productoEditado = await peticionesHttp(urlActualizar, options)

            const nuevoEstadoProductos = productos.map(prod => prod.id === productoEditado.id ? productoEditado : prod)

            setProductos(nuevoEstadoProductos)
            
        } catch (error) {
            console.error('[actualizarProductoContext]', error)
        }

    }

    const eliminarProductoContext = async (id) => {
        
        try {
            
            const options = {
                method: 'DELETE'
            }
            
            const urlEliminacion = url + id

            // const prodEliminado = await peticionesHttp(urlEliminacion, options)

            const nuevoEstadoProductos = productos.filter(prod => prod.id !== id)

            setProductos(nuevoEstadoProductos)
            
        } catch (error) {
            console.error('[eliminarProductoContext]', error)
        }

    }

    const data = {
        productos,
        productoAEditar,
        crearProductoContext,
        actualizarProductoContext,
        eliminarProductoContext
    }

    return <ProductosContext.Provider value={data}> {children} </ProductosContext.Provider>
}

export { ProductosProvider }
export default ProductosContext