import React, { useContext, useState } from 'react';
import { MyContext } from '../contexts/MyContext';
import  { Redirect } from 'react-router-dom';

function Login() {

    const { toggleNav, loginUser, isLoggedIn } = useContext(MyContext);

    const initialState = {
        userInfo: {
            vch_Email: '',
            vch_Password: '',
        },
        errorMsg: '',
        successMsg: '',
    }

    const [state, setState] = useState(initialState);

    // On change input value (email & password)
    const onChangeValue = (e) => {
        setState({
            ...state,
            userInfo: {
                ...state.userInfo,
                [e.target.name]: e.target.value
            }
        });
    }

    // On Submit Login From
    const submitForm = async (event) => {
        event.preventDefault();
        const data = await loginUser(state.userInfo);
        console.log(data.message);
        if (data.success && data.token) {
            setState({
                ...initialState,
                successMsg: data.message,
            });
            localStorage.setItem('loginToken', data.token);
             await isLoggedIn();
            
            window.location="/";
        }
        else {
            setState({
                ...state,
                successMsg: '',
                errorMsg: data.message
            });
        }
    }

    // Show Message on Error or Success
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
            <h1 className="display-3">Hola ~ Binvenido a FoodFit</h1>
            <p className="lead">Para poder relizar pedidos iniica sescion con tu cuenta</p>
            <hr className="my-4" />
            <center> <h1>Login</h1></center>
            <br />
            <form onSubmit={submitForm} >
                <div className="form-group">
                    <label>Email</label>
                    <input className="form-control" name="vch_Email" type="email" required placeholder="Ingrese su Correo Electronico" value={state.userInfo.vch_Email} onChange={onChangeValue} />
                </div>
                <div className="form-group">
                    <label>PassWord</label>
                    <input className="form-control" name="vch_Password" type="password" required placeholder="Ingrese su Cotraseña" value={state.userInfo.vch_Password} onChange={onChangeValue} />
                </div>
                {errorMsg}
                {successMsg}
                <button type="submit" className="btn btn-success btn-lg btn-block" onClick={toggleNav} >Iniciar Sesion</button>

            </form>
            <br />
        </div>

    );
}

export default Login;