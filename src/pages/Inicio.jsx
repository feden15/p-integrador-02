import './Inicio.scss'
import { useContext } from 'react'
import ProductosContext from '../contexts/ProductosContext';
import Card from '../components/Card';

const Inicio = () => {

    const {productos} = useContext(ProductosContext)

    return (
        <main>
            <section className="section-cards">
                <header className="section-cards__header">
                    <h1>lunarte</h1>
                    <p>Se encontraron 8 productos</p>
                </header>
            </section>

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