import Formulario from "../components/components-alta/Formulario"
import Tabla from "../components/components-alta/Tabla"
import useTitulo from "../hooks/useTitulo"
import './Alta.scss'

const Alta = () => {

  useTitulo('Alta')

  return (
    <div className="contenedor">
      <h2>alhacena</h2>
      <Formulario />
      <div className="tabla-responsive-container">
        <Tabla />
      </div>
    </div>
  )
}

export default Alta