import React, { createContext,Component } from "react";
import axios from 'axios';
export const MyContext = createContext();

// Define the base URL
const Axios = axios.create({
    baseURL: 'http://localhost/php-login-registration-api/',
});

class MyContextProvider extends Component{
    constructor(){
        super();
        this.isLoggedIn();
    }

    // Root State
    state = {
        showLogin:true,
        isAuth:false,
        theUser:null,
    }
    
    // Toggle between Login & Signup page
    toggleNav = () => {
        const showLogin = !this.state.showLogin;
        this.setState({
            ...this.state,
            showLogin
        })
    }

    // On Click the Log out button
    logoutUser = () => {
        localStorage.removeItem('loginToken');
        this.setState({
            ...this.state,
            isAuth:false
        })
    }

    registerUser = async (user) => {

        // Sending the user registration request
        const register = await Axios.post('register.php',{
            vch_Nombres: user.vch_Nombres,
            vch_A_Paterno: user.vch_A_Paterno,
            vch_A_Materno:user.vch_A_Materno,
            vch_Direccion:user.vch_Direccion,
            vch_Telefono: user.vch_Telefono,
            vch_Nick:user.vch_Nick,
            vch_Password:user.vch_Password,
            vch_Password2: user.vch_Password2,
            vch_Email:user.vch_Email
        });

        return register.data;
    }

    
    registerPedido = async (user) => {

        // Sending the user registration request
        const registerp = await Axios.post('inser_pedido.php',{
            cantidad: user.cantidad,
            idplatillo: user.idplatillo
        });

        return registerp.data;
    }

    
   

    loginUser = async (user) => {

        // Sending the user Login request
        const login = await Axios.post('login.php',{
            vch_Email:user.vch_Email,
            vch_Password:user.vch_Password
        });
        return login.data;
    }

    // Checking user logged in or not
    isLoggedIn = async () => {
        const loginToken = localStorage.getItem('loginToken');

        // If inside the local-storage has the JWT token
        if(loginToken){

            //Adding JWT token to axios default header
            Axios.defaults.headers.common['Authorization'] = 'bearer '+loginToken;

            // Fetching the user information
            const {data} = await Axios.get('user-info.php');

            // If user information is successfully received
            if(data.success && data.user){
                this.setState({
                    ...this.state,
                    isAuth:true,
                    theUser:data.user
                });
            }

        }
    }

    render(){
        const contextValue = {
            rootState:this.state,
            toggleNav:this.toggleNav,
            isLoggedIn:this.isLoggedIn,
            registerUser:this.registerUser,
            registerPedido:this.registerPedido,
            loginUser:this.loginUser,
            logoutUser:this.logoutUser
        }
        return(
            <MyContext.Provider value={contextValue}>
                {this.props.children}
            </MyContext.Provider>
        )
    }

}

export default MyContextProvider;