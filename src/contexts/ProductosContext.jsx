import { createContext, useEffect, useState } from "react";
import { peticionesHttp } from "../helpers/peticiones-http";

const ProductosContext = createContext()

const ProductosProvider = ({ children }) => {

    //CAMBIO
    const asegurarseHTTPS = (url) => {
        if (url && url.startsWith('http://')) {
            return url.replace('http://', 'https://')
        }
        return url
    }

    const url = import.meta.env.VITE_BACKEND_PRODUCTOS

    const [productos, setProductos] = useState(null)
    const [productoAEditar, setProductoAEditar] = useState(null)

    useEffect(() => {
        getAllProductos()
    }, [])
    
    const getAllProductos = async () => {
        try {
            const prods = await peticionesHttp(url, {})

            const productosConHttps = prods.map(producto => ({
                ...producto,
                foto: asegurarseHTTPS(producto.foto),
            }))

            setProductos(productosConHttps)

        } catch (error) {
            console.error('[getAllProductos]', error)
        }
    }

    const crearProductoContext = async (productoNuevo) => {

        try {

            delete productoNuevo._id // no nos sirve el ID que trae porque el Back crea uno nuevo

            const options = {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(productoNuevo)
            }

            const prods = await peticionesHttp(url, options)

            const nuevoEstadoProductos = [...productos, prods]

            setProductos(nuevoEstadoProductos)

        } catch (error) {
            console.error('[crearProductoContext]', error);
        }

    }

    // const actualizarProductoContext = async (productoAEditar) => {

    //     try {

    //         const options = {
    //             method: 'PUT',
    //             headers: { 'content-type': 'application/json' },
    //             body: JSON.stringify(productoAEditar)
    //         }

    //         const urlActualizar = url + productoAEditar.id

    //         const productoEditado = await peticionesHttp(urlActualizar, options)

    //         const nuevoEstadoProductos = productos.map(prod => prod.id === productoEditado.id ? productoEditado : prod)

    //         setProductos(nuevoEstadoProductos)

    //     } catch (error) {
    //         console.error('[actualizarProductoContext]', error)
    //     }

    // }

    // CAMBIO
    const actualizarProductoContext = async (productoAEditar) => {
        try {
            const productoConHttps = {
                ...productoAEditar,
                foto: asegurarseHTTPS(productoAEditar.foto),
            };

            const options = {
                method: 'PUT',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(productoConHttps),
            };

            const urlActualizar = url + productoConHttps.id;

            const productoEditado = await peticionesHttp(urlActualizar, options);

            const nuevoEstadoProductos = productos.map(prod =>
                prod.id === productoEditado.id ? productoEditado : prod
            );

            setProductos(nuevoEstadoProductos);

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

            const prodEliminado = await peticionesHttp(urlEliminacion, options)

            if (!prodEliminado) {
                return;
            }

            const nuevoEstadoProductos = productos.filter(prod => prod.id !== id)

            setProductos(nuevoEstadoProductos)

        } catch (error) {
            console.error('[eliminarProductoContext]', error)
        }

    }

    const data = {
        productos,
        productoAEditar,
        setProductoAEditar,
        crearProductoContext,
        actualizarProductoContext,
        eliminarProductoContext
    }

    return <ProductosContext.Provider value={data}> {children} </ProductosContext.Provider>
}

export { ProductosProvider }
export default ProductosContext