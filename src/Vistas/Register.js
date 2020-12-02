import React, { useContext, useState } from 'react'
import { MyContext } from '../contexts/MyContext'

function Register() {
    const { toggleNav, registerUser } = useContext(MyContext);
    const initialState = {
        userInfo: {
            vch_Nombres: '',
            vch_A_Paterno: '',
            vch_A_Materno: '',
            vch_Direccion: '',
            vch_Telefono: '',
            vch_Nick: '',
            vch_Password: '',
            vch_Password2: '',
            vch_Email: '',
            
        },
        errorMsg: '',
        successMsg: '',
    }
    const [state, setState] = useState(initialState);

    // On Submit the Registration Form
    const submitForm = async (event) => {
        event.preventDefault();
        const data = await registerUser(state.userInfo);
        
        if (data.success) {
            setState({
                ...initialState,
                successMsg: data.message,
            });
        }
        else {
            setState({
                ...state,
                successMsg: '',
                errorMsg: data.message
            }); 
        }
        
    }

    // On change the Input Value (name, email, password)
    const onChangeValue = (e) => {
        setState({
            ...state,
            userInfo: {
                ...state.userInfo,
                [e.target.name]: e.target.value
            }

        });

    }

    // Show Message on Success or Error
    let successMsg = '';
    let errorMsg = '';
    if (state.errorMsg) {
        errorMsg = <div className="error-msg">{state.errorMsg}</div>;
    }
    if (state.successMsg) {
        successMsg = <div className="success-msg">{state.successMsg}</div>;
    }
    
    return (
        <div className="container">
            <center><h2> Registro</h2></center>
            <br />
            <form onSubmit={submitForm} >
                <div className="row">
                    <div className="col-sm">
                        <h4 className="text-center"> Datos Personales</h4>
                        <div className="form-group">
                            <label htmlFor="vch_Nombres">Nombres</label>
                            <input className="form-control" name="vch_Nombres" required type="text" value={state.userInfo.vch_Nombres} onChange={onChangeValue} placeholder="Ej: Jesus Manuel" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="vch_A_Paterno">Apellido Paterno</label>
                            <input className="form-control" name="vch_A_Paterno" required type="text" value={state.userInfo.vch_A_Paterno} onChange={onChangeValue} placeholder="Ej: Cortes" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="vch_A_Materno">Apellido Materno</label>
                            <input className="form-control" name="vch_A_Materno" required type="text" value={state.userInfo.vch_A_Materno} onChange={onChangeValue} placeholder="Ej: Guzman" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="vch_Direccion">Direccion</label>
                            <textarea className="form-control" name="vch_Direccion" required type="text" value={state.userInfo.vch_Direccion} onChange={onChangeValue} placeholder="Calle,colonia,Referencia" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="vch_Telefono">Telefono</label>
                            <input className="form-control" name="vch_Telefono" required type="text" value={state.userInfo.vch_Telefono} onChange={onChangeValue} placeholder="Ej: 7717051035" />
                        </div>

                    </div>
                    <div className="col-sm">
                    <h4 className="text-center"> Datos Del Usuario</h4>
                        <div className="form-group">
                            <label htmlFor="namvch_Nicke">Nick</label>
                            <input className="form-control" name="vch_Nick" required type="text" value={state.userInfo.vch_Nick} onChange={onChangeValue} placeholder="Ej: TESMAN" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="vch_Email">Email</label>
                            <input className="form-control" name="vch_Email" required type="text" value={state.userInfo.vch_Email} onChange={onChangeValue} placeholder="Ej: correo@hotmail.com" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="vch_Password">Contraseña</label>
                            <input className="form-control" name="vch_Password" required type="text" value={state.userInfo.vch_Password} onChange={onChangeValue} placeholder="Ej: Hola!mundo" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="vch_Password2">Contraseña</label>
                            <input className="form-control" name="vch_Password2" required type="password" value={state.userInfo.vch_Password2} onChange={onChangeValue} placeholder="Ej: Hola!mund" />
                        </div>
                      
                    </div>

                </div>
                {errorMsg}
                {successMsg}
                <button onClick={toggleNav} type="submit" className="btn btn-danger btn-lg btn-block">Registrame </button>
            </form>
            <br></br>
        </div>
    );
}

export default Register