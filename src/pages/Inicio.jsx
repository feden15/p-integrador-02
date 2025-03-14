import './Inicio.scss'

const Inicio = () => {
    return (
        <>
            <header className="main-header">
                <input type="checkbox" id="menu" />

                <nav className="nav-bar">
                    <ul className="nav-bar__nav-list">
                        <li className="nav-bar__nav-item">
                            <a href="index.html" className="nav-bar__nav-link">Inicio</a>
                        </li>
                        <li className="nav-bar__nav-item">
                            <a href="" className="nav-bar__nav-link">Alta</a>
                        </li>
                        <li className="nav-bar__nav-item">
                            <a href="nosotros.html" className="nav-bar__nav-link">Nosotros</a>
                        </li>
                        <li className="nav-bar__nav-item">
                            <a href="contacto.html" className="nav-bar__nav-link">Contacto</a>
                        </li>
                    </ul>
                </nav>

                <div className="search-bar">
                    <div className="search-bar__logo-container">
                        <img src="imgs/logoLunarte.webp" alt="" />
                    </div>
                    <form action="#" className="search-bar__form-container">
                        <label htmlFor="busqueda" className="search-bar__form-label">Buscar</label>
                        <input type="search" id="busqueda" className="search-bar__form-search" />
                        <button type="submit" className="search-bar__form-submit">Buscar</button>
                    </form>
                    <div className="search-bar__carrito-container">
                        <img src="imgs/logoCarrito.webp" alt="Logo carrito de compras" />
                    </div>
                    <div className="menu-toogle">
                        <label htmlFor="menu" className="menu-toogle__label">
                            <span className="menu-toogle__top-bread"></span>
                            <span className="menu-toogle__meat"></span>
                            <span className="menu-toogle__bottom-bread"></span>
                        </label>
                    </div>
                </div>

            </header>

            <main>
                <section className="section-cards">
                    <header className="section-cards__header">
                        <h1>lunarte</h1>
                        <p>Se encontraron 8 productos</p>
                    </header>
                </section>

                <section className="cards-container" id="container-productos"></section>
            </main>

            <footer>
                2025
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#fefefe"><path d="M408-312h144q20.4 0 34.2-13.8Q600-339.6 600-360v-72h-72v48h-96v-192h96v48h72v-72q0-20.4-13.8-34.2Q572.4-648 552-648H408q-20.4 0-34.2 13.8Q360-620.4 360-600v240q0 20.4 13.8 34.2Q387.6-312 408-312Zm72.28 216Q401-96 331-126t-122.5-82.5Q156-261 126-330.96t-30-149.5Q96-560 126-629.5q30-69.5 82.5-122T330.96-834q69.96-30 149.5-30t149.04 30q69.5 30 122 82.5T834-629.28q30 69.73 30 149Q864-401 834-331t-82.5 122.5Q699-156 629.28-126q-69.73 30-149 30Zm-.28-72q130 0 221-91t91-221q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 130 91 221t221 91Zm0-312Z" /></svg>
                Lunarte
            </footer>
        </>
    )
}

export default Inicio