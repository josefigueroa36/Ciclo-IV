import React from 'react'
import { BarraNav } from './BarraNav'
import Container from 'react-bootstrap/Container';
import './../assets/css/Inicio.css'
import { PiePag } from './PiePag'

export const Inicio = () => {
    return (

        <div className='body'>
            <BarraNav />
            <Container>

                <div className='enunciado'>

                    <div className='logo'>
                        <img className='logo-app'
                            alt='logo-app'
                            src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.prensalibre.com%2Fwp-content%2Fuploads%2F2019%2F09%2Fpaquetes-1.jpg%3Fquality%3D82&f=1&nofb=1&ipt=20ffd1dc6e03bf7ec25a29ef734713b2e25f67faae9dea608aff310e9f790f5d&ipo=images'
                        />
                    </div>
                    <article className='text'>
                        <p className='text-p'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias fuga ducimus ratione obcaecati in voluptatibus
                            veritatis debitis officiis, quisquam delectus nesciunt corrupti incidunt? Ipsam ullam minima, impedit sapiente nihil ad.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias fuga ducimus ratione obcaecati in voluptatibus
                            veritatis debitis officiis, quisquam delectus nesciunt corrupti incidunt? Ipsam ullam minima, impedit sapiente nihil ad.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                        <section>
                            <img className='imagen-ref'
                                src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.eleconomista.net%2Fexport%2Fsites%2Fprensagrafica%2Fimg%2F2020%2F02%2F11%2Fcorreox_paquete_jpg_1102185208.jpg_1102185208.jpg&f=1&nofb=1&ipt=fd1a4023d96523109dbd2d4074201da5a6f232682e3d752bd9a870056a075596&ipo=images'
                                alt='img'
                            />
                        </section>
                    </article>
                        <div className='botones'>
                            <a className='btn btn-primary' href='#'>
                                Registrarse
                            </a>

                            <a className='btn btn-secondary' href='#'>
                                Iniciar Sesión
                            </a>
                        </div>
                </div>

                <article id='quienes-somos' className='quienes-somos'>
                    <h1>Quienes Somos</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias fuga ducimus ratione obcaecati in voluptatibus
                        veritatis debitis officiis, quisquam delectus nesciunt corrupti incidunt? Ipsam ullam minima, impedit sapiente nihil ad.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias fuga ducimus ratione obcaecati in voluptatibus
                        veritatis debitis officiis, quisquam delectus nesciunt corrupti incidunt? Ipsam ullam minima, impedit sapiente nihil ad.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias fuga ducimus ratione obcaecati in voluptatibus
                        veritatis debitis officiis, quisquam delectus nesciunt corrupti incidunt? Ipsam ullam minima, impedit sapiente nihil ad.
                    </p>
                </article>
                <article id='servicios' className='servicio'>
                    <h1>Nuestros Servicios</h1>
                    <div className='conten-serv-img'>
                        <img className='servicio-img'
                            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.adslzone.net%2Fapp%2Fuploads-adslzone.net%2F2020%2F03%2FaperEnviar.jpg&f=1&nofb=1&ipt=e9de07ce8f378e827747bb31c6499ba2259f5179898b510cfcd40c825f5853a5&ipo=images"
                            alt="img-1"
                        />
                        <img className='servicio-img'
                            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.adslzone.net%2Fapp%2Fuploads-adslzone.net%2F2020%2F03%2FaperEnviar.jpg&f=1&nofb=1&ipt=e9de07ce8f378e827747bb31c6499ba2259f5179898b510cfcd40c825f5853a5&ipo=images"
                            alt="img-1"
                        />
                        <img className='servicio-img'
                            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.adslzone.net%2Fapp%2Fuploads-adslzone.net%2F2020%2F03%2FaperEnviar.jpg&f=1&nofb=1&ipt=e9de07ce8f378e827747bb31c6499ba2259f5179898b510cfcd40c825f5853a5&ipo=images"
                            alt="img-1"
                        />
                    </div>
                </article>

                <article id='contacto' className='contacto'>
                    <h1>Contacto</h1>
                    <p className='contacto-tex'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias fuga ducimus ratione obcaecati in voluptatibus
                        veritatis debitis officiis, quisquam delectus nesciunt corrupti incidunt? Ipsam ullam minima, impedit sapiente nihil ad.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias fuga ducimus ratione obcaecati in voluptatibus
                    </p>
                </article>
            </Container>
            <PiePag />
        </div>
    );
}
