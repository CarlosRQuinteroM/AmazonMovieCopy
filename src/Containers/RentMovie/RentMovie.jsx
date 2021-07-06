import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import moment from "moment";
import axios from "axios";
import { ADD_RENT } from "../../redux/type";
import ScrollTrending from "../../Components/ScrollMovies/ScrollTrending";

const RentMovie = (props) => {
  let history = useHistory();
  const today = moment().format("YYYY-MM-DD");

  const [datosUser, setDatosUser] = useState({
    returnDate: "",
    userName: "",
  });

  const updateFormulario = (e) => {
    setDatosUser({ ...datosUser, [e.target.name]: e.target.value });
  };

  const ejecutaRegistro = async () => {
    let token = props.credentials.token;

    let body = {
      idUser: props.credentials.user.id,
      idMovie: props.movies.id,
      movieTitle: props.movies.title,
      returnDate: datosUser.returnDate,
      rentalDate: today,
      posterMovie: props.movies.poster_path,
    };

    //console.log(body);

    axios
      .post("https://rentmovie-back3nd.herokuapp.com/orders/", body, {
        headers: { authorization: "Bearer " + token },
      })
      .then((res) => {})
      .catch((error) => {
        console.log(error);
      });

    props.dispatch({ type: ADD_RENT, payload: body });

    setTimeout(() => {
      history.push("/");
    }, 2000);
  };


  //links IMG Poster 
  const baseImgUrl = "https://image.tmdb.org/t/p";
  // const size = "w1280";
  const sizePoster = "w200";
 

  if (!props.credentials?.token) {

    setTimeout(() => {
      history.push("/login");
    }, 3000);

    return (
      <div>Inicia secion para difrutar del mejor alquiler de peliculas</div>
      // tengo que crear una tarjeta que se vea mejor que el parrafo
    );

    
  } else {
    return (
      <div className="RentMovie">
        <h1 id="rentaltitle">Rental Movie</h1>
        <img
          className="backdrop_path"
          src={`${baseImgUrl}/original${props.movies.backdrop_path}`}
          alt="backdrop_path"
        ></img>
        <div className="infoRentMovie">
          <div className="imgPoster">
            <img
              className="poster_path"
              src={`${baseImgUrl}/${sizePoster}${props.movies.poster_path}`}
              alt="backdrop_path"
            ></img>
          </div>
          <div className="RentPoster">
            <h2>
              {props.movies.title}. ({props.movies.release_date})
            </h2>

            <h4 name="userName">
              nombre : {props.credentials.user.name}{" "}
              {props.credentials.user.last_name1}
            </h4>

            <p>Today: {today}</p>

            <input
              className="inputBase"
              type="date"
              name="returnDate"
              onChange={updateFormulario}
              placeholder="Fecha de entrega :"
              onchange="this.className=(this.value!=''?'has-value':'')"
            ></input>
          </div>
          <div
            id="Botom"
            className="newUserBoton"
            onClick={() => ejecutaRegistro()}>
            Enviar
          </div>
        </div>
      </div>
        
    );
  }
};

export default connect((state) => ({
  credentials: state.credentials,
  movies: state.movies,
  ordersRent: state.ordersRent,
}))(RentMovie);
