import useTitulo from '../hooks/useTitulo'
import './Nosotros.scss'

const Nosotros = () => {
  useTitulo('Nosotros')

  return (
    <div className="nosotros-container">
      <section className="nosotros-main">
        <article className="nosotros-historia">
          <h2>Nuestra Historia</h2>
          <p>
            Lunarte comenzó como un pequeño emprendimiento familiar en 2015, cuando María, nuestra fundadora,
            empezó a crear piezas únicas de decoración en el garage de su casa. Lo que comenzó como un pasatiempo
            pronto se convirtió en una pasión compartida por todo el equipo.
          </p>
          <div className="nosotros-imagen">
            <img src="imgs/macetas-actualidad.webp" alt="Equipo de Lunarte" />
          </div>
          <p>
            Hoy, cada pieza que creamos lleva el sello de dedicación y amor por el arte que nos caracteriza.
            Seleccionamos cuidadosamente los materiales y ponemos atención a cada detalle para ofrecer productos
            que llenen de magia cada espacio.
          </p>
        </article>
      </section>
    </div>
  )
}

export default Nosotros