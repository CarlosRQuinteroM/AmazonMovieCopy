import React from 'react';
import { useHistory } from "react-router-dom";
// import { connect } from "react-redux";
// import { LOGOUT } from "../../redux/type";
import Boton from "../Boton/Boton";

const Header = (props) => {


    let history = useHistory();
    const takeMe = (were) =>{
        history.push(were)
    }





    return ( 
        <div className="headerBody" >
        <Boton lugar="/login" destino="Login" onClick={() => takeMe("/")}/>
        <Boton lugar="/register" destino="register" onClick={() => takeMe("/")}/>
        <Boton lugar="/" destino="home" onClick={() => takeMe("/")}/>
        </div>
    )   
}

export default Header
