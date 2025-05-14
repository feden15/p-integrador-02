import './Inicio.scss'
import { useContext } from 'react'
import ProductosContext from '../contexts/ProductosContext';
import Card from '../components/Card';
import useTitulo from '../hooks/useTitulo';

const Inicio = () => {

    useTitulo('Inicio')

    const { productos } = useContext(ProductosContext)

    return (
        <main>
            <header className="section-cards__header">
                <h1>lunarte</h1>
            </header>

            <section className="cards-container" id="container-productos">
                {
                    productos && productos.map((producto) => (
                        <Card producto={producto} key={producto.id} />
                    ))
                }
            </section>
        </main>
    )
}

export default Inicio