import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { CLEAR_RENT, LOGOUT, DELETE_MOVIE } from "../../redux/type";
import Boton from "../Boton/Boton";
import profilePic from "../../img/profile.png";
;

const Header = (props) => {
  let history = useHistory();
  const takeMe = (were) => {
    history.push(were);
  };

  const logOut = () => {
    props.dispatch({ type: LOGOUT });
    props.dispatch({ type: DELETE_MOVIE });
    props.dispatch({ type: CLEAR_RENT });
  };

  if (props.credentials?.token !== "") {
    return (
      <div className="headerBody">

        <Boton lugar="/rentals" destino="My Rentals" onClick={() => takeMe("/")} />


        <Boton lugar="/" destino="home" onClick={() => takeMe("/")} />
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
          {/* <img className="imgUser"  src={profilePic} alt="imgUser"/> */}
        </div>

        <div onClick={() => logOut("/")}>
          <Boton lugar="/" destino="LogOut" />
        </div>
      </div>
    );
  } else {
    return (
      <div className="headerBody">
        <Boton lugar="/login" destino="Login" onClick={() => takeMe("/")} />
        <Boton
          lugar="/register"
          destino="register"
          onClick={() => takeMe("/")}
        />
        <Boton lugar="/" destino="home" onClick={() => takeMe("/")} />
      </div>
    );
  }
};
export default connect((state) => ({ credentials: state.credentials }))(Header);
