import { useEffect } from "react"

const useTitulo = (textoTitulo = 'Sin título') => {

    useEffect(() => {
        document.title = `Lunarte - ${textoTitulo}`
    }, [])

}

export default useTitulo