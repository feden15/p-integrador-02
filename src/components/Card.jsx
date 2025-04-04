import { useEffect, useState } from 'react';
import { useContext } from 'react';
import CarritoContext from '../contexts/CarritoContext';
import './Card.scss'

const Card = ({ producto }) => {

  const { agregarProductoAlCarritoContext } = useContext(CarritoContext);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => { // bloqueamos scrollear la página cuando se expande una card
    if (isExpanded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isExpanded]);

  const handleAgregar = (producto) => {
    agregarProductoAlCarritoContext(producto);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className="card">
        <article className="card__article">
          <div className="card__image-container">
            <img className="card__image" src={producto.foto} alt={producto.nombre} />
          </div>
          <div className="card__content">
            <h2 className="card__heading">{producto.nombre}</h2>
            <div className="card__description">
              <p>{producto.detalles.substring(0, 50)}...</p>
            </div>
            <button className='card__button card__button--details' onClick={toggleExpand}>
              Ver detalles
            </button>
            <button className='card__button' onClick={() => handleAgregar(producto)}>
              Agregar al carrito
            </button>
          </div>
        </article>
      </div>

      {isExpanded && (
        <div className="modal-overlay" onClick={toggleExpand}>
          <div className="card-expanded" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={toggleExpand}>×</button>
            <div className="card__image-container">
              <img className="card__image" src={producto.foto} alt={producto.nombre} />
            </div>
            <div className="card__content">
              <h2 className="card__heading">{producto.nombre}</h2>
              <div className="card__description__modal">
                <p><strong>Precio:</strong> ${producto.precio}</p>
                <p><strong>Marca:</strong> {producto.marca}</p>
                <p><strong>Categoría:</strong> {producto.categoria}</p>
                <p><strong>Detalles completos:</strong> {producto.detalles}</p>
                <p><strong>Envío:</strong> {producto.envio ? 'Disponible' : 'No disponible'}</p>
              </div>
              <button
                className="card__buttons-container"
                onClick={() => {
                  handleAgregar(producto);
                  toggleExpand();
                }}
              >
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;