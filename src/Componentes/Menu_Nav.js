import React, { useContext } from 'react';
import { MyContext } from '../contexts/MyContext';
import { Link } from 'react-router-dom';
import logo from '../Componentes/Food_Logo.png';


function Menu_Nav() {
    const { rootState, logoutUser } = useContext(MyContext);
    const { theUser,isAuth } = rootState;

    

    if (isAuth) {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
                <Link className="navbar-brand" to="/"><img src={logo} className="navimg" alt="logo foodfit" />Food-Fit</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link menu_tamao" to="/#">Inicio <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link menu_tamao" to="/Platillos">Platillos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link menu_tamao" to="/Promosiones">Promosiones</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link menu_tamao" to={`/Orden/${theUser.id}`}>Mi orden</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link menu_tamao" to="/Nosotros">Nosotros</Link>
                        </li>
                    </ul>
                    <form className="form-inline my-1 my-sm-0">
                        
                        <div className="dropdown">
                            <button className="btn btn-danger dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Mi Perfil
  </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <button className="dropdown-item" onClick={logoutUser}>Logout</button>
                                <Link className="dropdown-item" to="/Perfil">Mi perfil</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </nav>
        )
    }
    // Showing Login Or Register Page According to the condition
    else {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
                <Link className="navbar-brand" to="/"><img src={logo} className="navimg" alt="logo foodfit" />Food-Fit</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link menu_tamao" to="/#">Inicio <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link menu_tamao" to="/Platillos">Platillos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link menu_tamao" to="/Promosiones">Promosiones</Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link className="nav-link menu_tamao" to="/Nosotros">Nosotros</Link>
                        </li>
                    </ul>
                    <form className="form-inline my-1 my-sm-0">
                        <div className="dropdown">
                            <button className="btn btn-danger dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Inico/Registro
  </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <Link className="dropdown-item" to="/Logins">Iniciar Sesion</Link>
                                <Link className="dropdown-item" to="/register">Registrrar</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </nav>
        )
    }

}

export default Menu_Nav;
