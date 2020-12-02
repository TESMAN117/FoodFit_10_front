import React from 'react'
import {Link} from 'react-router-dom';
function Footer() {
    return (

        <footer className="footer-area bg-f">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <h3>Acerca de Nosotros</h3>
                        <p>El restaurante Food Fit INC abre con el fin de concluir un sueño más en la vida, dimos a este establecimiento un concepto saludable, ofreciendo comida vegana, postres bajos en azúcar y hechas con materias orgánicas. </p>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h3>Suscribete y recibe nuestras ofertas</h3>
                        <div className="subscribe_form">
                            <form className="subscribe_form">
                                <input name="EMAIL" id="subs-email" className="form_input" placeholder="Dirección de Correo" type="email" />
                                <button type="submit" className="submit">SUSCRIBETE</button>
                                <div className="clearfix"></div>
                            </form>
                        </div>
                        <ul className="list-inline f-social">
                        <li className="list-inline-item"><Link to="/"><i className="fab fa-facebook"></i></Link></li>
						<li className="list-inline-item"><Link to="/"><i className="fab fa-twitter"></i></Link></li>
						<li className="list-inline-item"><Link to="/"><i className="fab fa-linkedin"></i></Link></li>
						<li className="list-inline-item"><Link to="/"><i className="fab fa-google-plus"></i></Link></li>
						<li className="list-inline-item"><Link to="/"><i className="fab fa-instagram"></i></Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h3>Información de Contacto</h3>
                        <p className="lead">Huejutla de reyes,Hidalgo,México, 43000</p>
                        <p className="lead"><a href="/#">+52 7713550934</a></p>
                        <p><a href="/#"> Clientes@footfit.com.mx</a></p>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h3>Horarios de apertura</h3>
                        <p><span className="text-color">Lunes: </span>Closed</p>
                        <p><span className="text-color">Martes:</span> 9:Am - 10PM</p>
                        <p><span className="text-color">Miercoles-Jueves :</span> 9:Am - 10PM</p>
                        <p><span className="text-color">Viernes-Sabado :</span> 5:PM - 10PM</p>
                    </div>
                </div>

            </div>
            <div className="copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <p className="company-name" >Todos lo Derechos Reservados. &copy; 2019 <a href="/#">Foot Fit INC</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;