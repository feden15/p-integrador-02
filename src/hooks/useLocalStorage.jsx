import { useState } from "react";

export const useLocalStorage = ( clave, valorInicial = [] ) => {

    const getValoralmacenado = () => {

        try {
            const valorAlmacenado = window.localStorage.getItem(clave)
            return valorAlmacenado ? JSON.parse(valorAlmacenado) : valorInicial
        } catch (error) {
            console.error(`Error al obtener ${clave} del localStorage ${error}`);
            return valorInicial
        }

    }

    const [valorAlmacenado, setValorAlmacenado] = useState(() => getValoralmacenado());

    const guardarValor = (valorNuevo) => {

        try {
            const nuevoValorAlmacenado = [...valorAlmacenado, valorNuevo]
            setValorAlmacenado(nuevoValorAlmacenado)
            window.localStorage.setItem(clave, JSON.stringify(nuevoValorAlmacenado))
        } catch (error) {
            console.error(`Error al guardar ${clave} del localStorage ${error}`);
        }

    }

    const eliminarValor = (id) => {

        try {
            const nuevoValorAlmacenado = [...valorAlmacenado]
            const indice = nuevoValorAlmacenado.findIndex(item => item.id === id)
            nuevoValorAlmacenado.splice(indice, 1)
            setValorAlmacenado(nuevoValorAlmacenado)
            window.localStorage.setItem(clave, JSON.stringify(nuevoValorAlmacenado))
        } catch (error) {
            console.error(`Error al eliminar ${clave} del localStorage con ${id} del producto ${error}`);
        }

    }

    const limpiarValores = () => {

        window.localStorage.clear()
        window.localStorage.setItem(clave, JSON.stringifya(valorInicial))
        setValorAlmacenado(valorInicial)

    }

    return [guardarValor, eliminarValor, limpiarValores, valorAlmacenado]
}