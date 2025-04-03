import useTitulo from "../hooks/useTitulo"
import './Contacto.scss'

const Contacto = () => {
  useTitulo('Contacto')

  return (
    <div className="contacto-container">
      <section className="contacto-contenido">
        <h1>Contacto</h1>
        <p>¿Tenés alguna consulta? Escribinos o visitá nuestras redes sociales</p>
        
        <div className="contacto-redes">
          <h3>Seguinos en nuestras redes</h3>
          <div className="redes-sociales">
            <a href="#" className="red-social">
              <i className="fab fa-instagram"></i> @LunarteOficial
            </a>
            <a href="#" className="red-social">
              <i className="fab fa-facebook"></i> Lunarte Decoración
            </a>
            <a href="#" className="red-social">
              <i className="fab fa-whatsapp"></i> +598 091 123-456
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contacto