import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { LOGIN } from "../../redux/type";


const Login = (props) => {

    let history = useHistory();
    // Hooks
    const [credentials, setCredentials] = useState({ email: "", password: "" });
  
    // const [msgError, setMensajeError] = useState("");
  
    // const [errorLogin, setErrorLogin] = useState({
    //   eEmail: "",
    //   ePassword: "",
    // });

    const updateCredentials = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
      };
    
    //   const checkLogin = (arg) => {
    //     switch (arg) {
    //       case "email":
    //         if (
    //           !/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/.test(
    //             credentials.email
    //           )
    //         ) {
    //           setErrorLogin({
    //             ...errorLogin,
    //             eEmail: "El email introducido no es valido ejemplo@ejemplo.com",
    //           });
    //         } else {
    //           setErrorLogin({ ...errorLogin, eEmail: "" });
    //         }
    //         break;
    //       case "password":
    //         if (
    //           !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(
    //             credentials.password
    //           )
    //         ) {
    //           setErrorLogin({
    //             ...errorLogin,
    //             ePassword:
    //               "La contraseña debe contener como mínimo 8 caracteres, mayúsculas, minúsculas, un número",
    //           });
    //         } else {
    //           setErrorLogin({ ...errorLogin, ePassword: "" });
    //         }
    //         break;
    //       default:
    //         break;
    //     }
    //   };
    
    //   useEffect(() => {}, []);

    const logeame = async () => {
        //Primero, testeamos los datos
    
        // if (
        //   !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
        //     credentials.email
        //   )
        // ) {
        //   setMensajeError("Introduce un correo Valido");
        //   return;
        // }
    
        //A continuación, generamos el body de datos
        let body = {
          email: credentials.email,
          password: credentials.password,
        };
    
        //Axios..envio
        try {
          let res = await axios.post("http://localhost:3005/login", body);
    
          // setCredentials(res.data.results);
          // localStorage.setItem("token", res.data.token);
          // localStorage.setItem("user", JSON.stringify(res.data.user));
    
          let data = {
            token: res.data.token,
            user: res.data.user,
            idUser: res.data.user.id,
          };
          console.log(data);
    
    
          props.dispatch({ type: LOGIN, payload: data });
    
          setTimeout(() => {
            history.push("/");
          }, 100);
        } catch (err) {
        //   setMensajeError(err);
        }
    
        //res viene de vuelta con el token y los datos
      };


    return (
        <div>
        <div className="vistaLogin">
          <div className="loginCard">
            <input
              className="inputLogin"
              name="email"
              title="email"
              placeholder="Email...fakefork@fork.com"
              onChange={updateCredentials}
            //   onBlur={() => checkLogin("email")}
              lenght="30"
            />
            {/* <div>{errorLogin.eEmail}</div> */}
            <input
              className="inputLogin"
              name="password"
              title="password"
              placeholder="Password"
              onChange={updateCredentials}
            //   onBlur={() => checkLogin("password")}
              lenght="30"
            />
            {/* <div>{errorLogin.ePassword}</div> */}
  
            <div className="sendButton" type="submit" onClick={() => logeame()}>
              Login
            </div>
            {/* <div>{msgError}</div> */}
          </div>
        </div>
      </div>
    )
}


export default connect((state) => ({ 
  credentials:state.credentials
  
}))(Login);