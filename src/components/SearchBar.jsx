import { Link, useNavigate } from 'react-router'
import './SearchBar.scss'

import NavItem from './NavItem'
import menuItems from '../constants/menuItems'

const SearchBar = () => {

    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/');
    };

    return (
        <div className="search-bar">
            <div onClick={handleLogoClick} className="search-bar__logo-container">
                <img src="imgs/logoLunarteSinFondo.webp" alt="" />
            </div>
            <div>
                <nav className="nav-bar">
                    <ul className="nav-bar__nav-list">
                        {
                            menuItems.map((item) => (
                                <NavItem item={item} key={item.id} />
                            ))
                        }
                    </ul>
                </nav>
            </div>
            <form action="#" className="search-bar__form-container">
                <label htmlFor="busqueda" className="search-bar__form-label">Buscar</label>
                <input type="search" id="busqueda" className="search-bar__form-search" placeholder='Buscar'/>
                <button type="submit" className="search-bar__form-submit">Buscar</button>
            </form>
            <div className="search-bar__carrito-container">
                <Link to="/carrito">
                    <img src="imgs/logoCarrito.webp" alt="Logo carrito de compras" />
                </Link>
            </div>
            <div className="menu-toogle">
                <label htmlFor="menu" className="menu-toogle__label">
                    <span className="menu-toogle__top-bread"></span>
                    <span className="menu-toogle__meat"></span>
                    <span className="menu-toogle__bottom-bread"></span>
                </label>
            </div>
        </div>
    )
}

export default SearchBar