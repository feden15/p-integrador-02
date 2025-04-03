import { BrowserRouter } from "react-router"
import Rutas from "./routes/Rutas"
import Cabecera from "./components/Cabecera"
import Footer from "./components/Footer"
import './App.scss'


function App() {

  return (
    <BrowserRouter>
      <div className="app-layout">
        <Cabecera />
        <main className="main-content">
          <Rutas />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
