import Navbar from "./Navbar"
import SearchBar from "./SearchBar"
import './Cabecera.scss'

const Cabecera = () => {
  return (
    <header className="main-header">
      <input type="checkbox" id="menu" />

      <Navbar />

      <SearchBar />

    </header>
  )
}

export default Cabecera