import { useContext, useEffect, useState } from "react"
import ProductosContext from "../../contexts/ProductosContext"
import './Formulario.scss'


const Formulario = () => {

    const {
        crearProductoContext,
        productoAEditar,
        setProductoAEditar,
        actualizarProductoContext } = useContext(ProductosContext)

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

        if (form.id === null) {
            crearProductoContext(form)
        } else {
            actualizarProductoContext(form)
        }

        handleReset()
    }

    const handleChange = (e) => {
        const { type, name, checked, value } = e.target
        setForm({ ...form, [name]: type === 'checkbox' ? checked : value })
    }

    const handleReset = () => {
        setForm(formInicial)
        setProductoAEditar(null)
    }

    return (
        <>

            <form className="form__productos" onSubmit={handleSubmit}>

                <h3>{form.id === null ? 'Agregar un producto' : 'Editar un producto'}</h3>

                <div className="grupo_entrada">
                    <label htmlFor="lbl-nombre">Nombre</label>
                    <input
                        className="general_input"
                        placeholder="Alhajero"
                        type="text"
                        id="lbl-nombre"
                        name="nombre"
                        value={form.nombre}
                        onChange={handleChange} />
                </div>
                <div className="grupo_entrada">
                    <label htmlFor="lbl-precio">Precio</label>
                    <input
                        className="general_input"
                        placeholder="$ 100"
                        type="text"
                        id="lbl-precio"
                        name="precio"
                        value={form.precio}
                        onChange={handleChange} />
                </div>
                <div className="grupo_entrada">
                    <label htmlFor="lbl-stock">Stock</label>
                    <input
                        className="general_input"
                        placeholder="50"
                        type="text"
                        id="lbl-stock"
                        name="stock"
                        value={form.stock}
                        onChange={handleChange} />
                </div>
                <div className="grupo_entrada">
                    <label htmlFor="lbl-marca">Marca</label>
                    <input
                        className="general_input"
                        placeholder="Lunarte"
                        type="text"
                        id="lbl-marca"
                        name="marca"
                        value={form.marca}
                        onChange={handleChange} />
                </div>
                <div className="grupo_entrada">
                    <label htmlFor="lbl-categoria">Categoría</label>
                    <input
                        className="general_input"
                        placeholder="Decoración"
                        type="text"
                        id="lbl-categoria"
                        name="categoria"
                        value={form.categoria}
                        onChange={handleChange} />
                </div>
                <div className="grupo_entrada">
                    <label htmlFor="lbl-detalles">Detalles</label>
                    <input
                        className="general_input"
                        placeholder="Ideal para guardar joyas..."
                        type="text"
                        id="lbl-detalles"
                        name="detalles"
                        value={form.detalles}
                        onChange={handleChange} />
                </div>
                <div className="grupo_entrada">
                    <label htmlFor="lbl-foto">Foto</label>
                    <input
                        className="general_input"
                        placeholder="URL"
                        type="text"
                        id="lbl-foto"
                        name="foto"
                        value={form.foto}
                        onChange={handleChange} />
                </div>
                <div className="grupo_entrada">
                    <label htmlFor="lbl-envio">Envío</label>
                    <div className="switch">
                        <input
                            className="check_switch"
                            type="checkbox"
                            id="lbl-envio"
                            name="envio"
                            checked={form.envio}
                            onChange={handleChange} />
                        <span className="slider">SiㅤㅤNo</span>
                    </div>

                </div>
                <hr />
                <div className="boton__productos">
                    <button className="boton__confirmar" type="submit">{form.id === null ? 'Guardar producto' : 'Confirmar edición'}</button>
                    <button className="boton__limpiar" type="reset" onClick={handleReset}>Limpiar todo</button>
                </div>

            </form>
        </>
    )
}

export default Formulario