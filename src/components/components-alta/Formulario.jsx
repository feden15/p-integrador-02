import { useContext, useEffect } from "react"
import ProductosContext from "../../contexts/ProductosContext"

const Formulario = () => {

    const {
        crearProductoContext,
        productoAEditar,
        setProductoAEditar,
        actualizarProductocontext } = useContext(ProductosContext)

    const formInicial = {
        id: null,
        nombre: '',
        precio: '',
        stock: '',
        marca: '',
        categoria: '',
        detalles: '',
        foto: '',
        envio: false
    }

    const [form, setForm] = useState(formInicial)

    useEffect(() => { 
      productoAEditar ? setForm(productoAEditar) : setForm(formInicial)
    }, [productoAEditar])
    
    const handleSubmit = (e) => {
        e.preventDefault()

        if (form.id  === null) {
            crearProductoContext(form)
        } else {
            actualizarProductocontext(form)
        }
    }

    return (
        <>
            <h2>Agregar : Editar</h2>

            <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="lbl-nombre">Nombre</label>
                    <input
                        type="text"
                        id="lbl-nombre"
                        name="nombre"
                    />
                </div>
                <div>
                    <label htmlFor="lbl-precio">Precio</label>
                    <input
                        type="text"
                        id="lbl-precio"
                        name="precio"
                    />
                </div>
                <div>
                    <label htmlFor="lbl-stock">Stock</label>
                    <input
                        type="text"
                        id="lbl-stock"
                        name="stock"
                    />
                </div>
                <div>
                    <label htmlFor="lbl-marca">Marca</label>
                    <input
                        type="text"
                        id="lbl-marca"
                        name="marca"
                    />
                </div>
                <div>
                    <label htmlFor="lbl-categoria">Categoría</label>
                    <input
                        type="text"
                        id="lbl-categoria"
                        name="categoria"
                    />
                </div>
                <div>
                    <label htmlFor="lbl-detalles">Detalles</label>
                    <input
                        type="text"
                        id="lbl-detalles"
                        name="detalles"
                    />
                </div>
                <div>
                    <label htmlFor="lbl-foto">Foto</label>
                    <input
                        type="text"
                        id="lbl-foto"
                        name="foto"
                    />
                </div>
                <div>
                    <label htmlFor="lbl-envio">Envío</label>
                    <input
                        type="text"
                        id="lbl-envio"
                        name="envio"
                    />
                </div>

                <button type="submit">Guardar : Editar</button>
                <button type="reset">Limpiar</button>

            </form>
        </>
    )
}

export default Formulario