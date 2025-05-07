import { peticionesHttp } from '../../helpers/peticiones-http.js'
import './DragDrop.scss'

const DragDrop = ({ setFoto, srcImagenBack, setSrcImagenBack }) => {

    const arrayEventosDragDrop = ['dragenter', 'dragleave', 'dragover', 'drop']

    // Función que encontré en internet para cambiar los http por https y así evitar los warning que tira la consola
    const asegurarseHTTPS = (url) => {
        return url.replace(/^http:\/\//i, 'https://')
    }

    arrayEventosDragDrop.forEach(eventName => {
        document.body.addEventListener(eventName, e => e.preventDefault())
    })

    const handleDrop = (e) => {
        // console.log(e)
        const files = e.dataTransfer.files
        handleFiles(files)
    }

    const handleChange = (e) => {
        const files = e.target.files;
        if (files.length > 0) {
            handleFiles(files)
        }
    }

    const handleFiles = async (files) => {
        // console.log('Recibí los files', files)
        const file = files[0]
        await uploadFile(file)
        previewFile(file)
    }

    const uploadFile = async (file) => {
        console.log('Llegó a upload', file)
        //const url = 'http://localhost:8080/api/v1/uploads'
        const url = import.meta.env.VITE_BACKEND_UPLOAD

        try {

            const formData = new FormData()
            //                key   , value
            formData.append('imagen', file)

            const options = {
                method: 'POST',
                body: formData
            }

            const imagenUp = await peticionesHttp(url, options)

            const urlImagen = asegurarseHTTPS(imagenUp.url)
            setFoto({ foto: urlImagen })

        } catch (error) {
            console.error('[uploadFile]:', error)
        }
    }

    const previewFile = (file) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.addEventListener('loadend', () => {
            setSrcImagenBack(reader.result)
        })
    }

    return (
        <div className='drop-area' onDrop={handleDrop}>
            <p>
                Sube una imagen <b> arrastrándola</b> aquí o seleccionala desde tu dispositivo usando el botón <b>Subir imagen</b>
            </p>


            <div className='drop-area-image'>
                <img
                    src={srcImagenBack}
                    alt=""
                    width='max-content'
                />
            </div>

            <input type="file" id="lbl-foto" accept="image/*" onChange={handleChange} />
            <label className="drop-area-button" htmlFor="lbl-foto">
                Subir imagen
            </label>

        </div>
    )
}

export default DragDrop