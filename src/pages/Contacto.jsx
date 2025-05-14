import useTitulo from "../hooks/useTitulo"
import './Contacto.scss'

const Contacto = () => {

  useTitulo('Contacto')

  const linkMapa = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.9515738027108!2d-56.20102079090299!3d-34.90766476248403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f802b0e1d1f07%3A0x7d9cac3abf570af3!2sPl.%20Independencia%2C%20Montevideo%2C%20Departamento%20de%20Montevideo!5e0!3m2!1ses-419!2suy!4v1747241005372!5m2!1ses-419!2suy"
  const linkInstagram = "https://www.instagram.com/_lunarte23?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
  const linkFacebook = "https://www.facebook.com/profile.php?id=61561059429832"
  const linkWhatsappYMensaje = "https://wa.me/59898606692?text=Hola%20estoy%20viendo%20la%20página%20de%20Lunarte%20y%20me%20gustaria%20hacer%20una%20consulta%20sobre..."

  return (
    <div className="contacto-container">
      <section className="contacto-contenido">
        <h2>contacto</h2>
        <div className="contacto-redes">
          <p>¿Tenés alguna consulta?</p> <p>Escribinos o visitá nuestras redes sociales</p>
          <div className="redes-sociales">
            <a href={linkInstagram} className="red-social" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>@_lunarte23
            </a>
            <a href={linkFacebook} className="red-social" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>lunarte23
            </a>
            <a href={linkWhatsappYMensaje} className="red-social" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i> 098 606 692
            </a>
          </div>
        </div>
        <div className="contacto-mapa">
          <p>También podes visitarnos</p>
          <iframe
            src={linkMapa}
            className="mapa-responsive"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  )
}

export default Contacto