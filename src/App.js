import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Menu_Nav from './Componentes/Menu_Nav';
import View_Inicio from './Vistas/View_Inicio';
import View_Nosotros from './Vistas/View_Nosotros';
import View_Platillos from './Vistas/View_Platillos';
import View_Platillos_Detalle from './Vistas/View_Platillos_Detalle';
import View_Platillo_Pedido from './Vistas/View_Platillo_Pedido';
import View_Promosiones from './Vistas/View_Promosiones';
import View_Orden from './Vistas/View_Orden';
import Registrar from './Vistas/Register';
import Logins from './Vistas/Login';
import Perfil from './Vistas/Perfil';
import Footer from './Componentes/Footer';
import MyContextProvider from './contexts/MyContext';


function App() {

  return (
    <MyContextProvider>
      <Router>
        <div className="container-fluid">

          <Menu_Nav />
          <Switch>
            <Route path="/" exact component={View_Inicio} />
            <Route path="/Nosotros" component={View_Nosotros} />
            <Route path="/Platillos" exact component={View_Platillos} />
            <Route path="/Platillos/:id" component={View_Platillos_Detalle} />
            <Route path="/Platillo/:id" component={View_Platillo_Pedido} />
            <Route path="/Promosiones" component={View_Promosiones} />
            <Route path="/Orden/:id" component={View_Orden} />
            <Route path="/Registrar" component={Registrar} />
            <Route path="/Logins" component={Logins} />
            <Route path="/Perfil" component={Perfil} />
            

          </Switch>
          <Footer />
        </div>
      </Router>
    </MyContextProvider>
  );
}

export default App;
