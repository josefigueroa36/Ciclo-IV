import React from 'react'
import './../assets/css/PiePag.css'
export const PiePag = () => {
  return (
    <footer className='container-xxl'>
      <div className="row ">
        <div className="col-3">
          <img src="" alt="Logo" />
        </div>
        <div className="col-3">
          <h4>Mapa del sitio</h4>
          <ul>
            <li><a href="">Inicio</a></li>
            <li><a href="">Quienes Somos</a></li>
            <li><a href="">Servicios</a></li>
            <li><a href="">Contacto</a></li>
          </ul>
        </div>
        <div className="col-3">
          <h4>Conocer</h4>
          <ul>
            <li><a href="">Terminos y condiciones</a></li>
            <li><a href="">PQRS</a></li>
            <li><a href="">Datos personales</a></li>
          </ul>
        </div>
        <div className="col-3">
          <h4>Redes Sociales</h4>
          <a className='red-icon' href="">
            <img
              src="https://cdn-icons-png.flaticon.com/128/1384/1384021.png"
              alt="Facebook-icono"
            />
          </a>
          <a className='red-icon' href="">
            <img
              src="https://cdn-icons-png.flaticon.com/128/717/717392.png"
              alt="Instagram-icono"
            />
          </a>
          <a className='red-icon' href="">
            <img
              src="https://cdn-icons-png.flaticon.com/128/733/733635.png"
              alt="Twitter-icono"
            />
          </a>
        </div>
        
      <div className='copy'>
          <p>&copy; 2022 Equipo 11 - Mision Tic</p>
      </div>
        </div>
    </footer>
  )
}
