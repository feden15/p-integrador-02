import Formulario from "../components/components-alta/Formulario"
import Tabla from "../components/components-alta/Tabla"
import useTitulo from "../hooks/useTitulo"
import './Alta.scss'

const Alta = () => {

  useTitulo('Alta')

  return (
    <div className="contenedor ">
      <h1>Formulario de alta de productos</h1>
      <Formulario/>
      <Tabla/>
    </div>
  )
}

export default Alta