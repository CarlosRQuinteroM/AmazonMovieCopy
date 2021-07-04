import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { CLEAR_RENT, LOGOUT, DELETE_MOVIE } from "../../redux/type";
import Boton from "../Boton/Boton";
import profilePic from "../../img/profile.png";
import SearchByTitle from "../SearchByTitile/SearchByTitle";
import Logo from "../../img/logo.jpg";
import { FaHome } from 'react-icons/fa';
import { BiLogOut } from 'react-icons/bi';
import {HiOutlineLogin} from 'react-icons/hi';
import { BsCardChecklist }from 'react-icons/bs'

const Header = (props) => {
  const userAdmin = props.credentials.user.isAdmin;
  let history = useHistory();
  const takeMe = (were) => {
    history.push(were);
  };

  const logOut = () => {
    props.dispatch({ type: LOGOUT });
    props.dispatch({ type: DELETE_MOVIE });
    props.dispatch({ type: CLEAR_RENT });
  };

  if ( props.credentials?.token !== "" && userAdmin === true) {

    return (
      <div className="headerBody">
        <div>
          <img className="logo" alt="logo" src={Logo} />
        </div>
        <SearchByTitle />
        <Boton
          lugar="/rentals"
          destino="My Rentals"
          onClick={() => takeMe("/")}
        />
        <Boton lugar="/" destino="home" onClick={() => takeMe("/")} />
        <Boton lugar="/7a8d9m0i1n2i3s4t5r6a7c8i9o0n" destino="Admin" onClick={() => takeMe("/")} />
        <div onClick={() => takeMe("/profile")}>
          <img
            className="imgUser"
            src={
              !props.credentials.user.imgUser
                ? profilePic
                : props.credentials.user.imgUser
            }
            alt="imgUser"
          />
        </div>
        <div onClick={() => logOut("/")}>
          <Boton lugar="/" destino="LogOut" />
        </div>
      </div>
    );


  
  
  } else if (props.credentials?.token !== "") {
    return (
      <div className="headerBody">
        <div>
          <img className="logo" alt="logo" src={Logo} />
        </div>
        <SearchByTitle className="navBar" />
        <Boton
          lugar="/rentals"
          destino="My Rentals"
          onClick={() => takeMe("/")}
        />
        <Boton lugar="/"  destino={<FaHome id="icon"/>} onClick={() => takeMe("/")} />
        <div onClick={() => takeMe("/profile")}>
          <img
            className="imgUser"
            src={
              !props.credentials.user.imgUser
                ? profilePic
                : props.credentials.user.imgUser
            }
            alt="imgUser"
          />
        </div>
        <div onClick={() => logOut("/")}>
        
          <Boton lugar="/" destino={<BiLogOut  id="icon"/>}/>
        </div>
      </div>
    );
   
   
   
   
  } else {
    return (
      <div className="headerBody">
        <Boton lugar="/login" destino={<HiOutlineLogin id="icon"/>} onClick={() => takeMe("/")} />
        <Boton
          lugar="/register"
          destino={<BsCardChecklist id="icon"/>}
          onClick={() => takeMe("/")}
        />
        <Boton lugar="/" destino={<FaHome id="icon"/>}  onClick={() => takeMe("/")} />
      </div>
    );
  }
};
export default connect((state) => ({ credentials: state.credentials }))(Header);
































