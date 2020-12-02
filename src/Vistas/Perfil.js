import React from 'react';


function Platillos_Pedido() {
    
    return (
        <div className="jumbotron">
            <h1 className="display-3">Mis datos</h1>
            <p className="lead">Esta pagina es para la configuracion de tu informacion.</p>
            <hr className="my-4" />
            <div className="container">
                <h1 className="display-5 text-center">Formulario de Datos</h1>
                <br />
                <form>
                    <div className="row">
                        <div className="col">
                            <h4 className="text-center"> Datos Personales</h4>
                            <div className="form-group">
                                <label htmlFor="vch_Nombres">Nombres</label>
                                <input className="form-control" name="vch_Nombres" required type="text" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="vch_A_Paterno">Apellido Paterno</label>
                                <input className="form-control" name="vch_A_Paterno" required type="text" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="vch_A_Materno">Apellido Materno</label>
                                <input className="form-control" name="vch_A_Materno" required type="text" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="vch_Direccion">Direccion</label>
                                <textarea className="form-control" name="vch_Direccion" required type="text" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="vch_Telefono">Telefono</label>
                                <input className="form-control" name="vch_Telefono" required type="text" />
                            </div>
                        </div>
                        <div className="col">
                            <h4 className="text-center"> Datos Del Usuario</h4>
                            <div className="form-group">
                                <label htmlFor="namvch_Nicke">Nick</label>
                                <input className="form-control" name="vch_Nick" required type="text" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="vch_Email">Email</label>
                                <input className="form-control" name="vch_Email" required type="text" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="vch_Password">Contraseña</label>
                                <input className="form-control" name="vch_Password" required type="password" />
                            </div>

                        </div>
                    </div>
                </form>

            </div>
        </div>

    )
}
export default Platillos_Pedido;
