import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import moment from "moment";
import axios from "axios";

const RentMovie = (props) => {
  let history = useHistory();

  const today = moment().format("YYYY-MM-DD")
  // const returnDay =  datosUser.returnDate;

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
      rentalDate : today,
      posterMovie:props.movies.poster_path, 
    };

    console.log(body);

    axios
    .post("http://localhost:3005/orders/", body, {headers:{'authorization':'Bearer ' + token}})
    .then((res) => {})
    .catch((error) => {
      console.log(error);
    });
  };

  const baseImgUrl = "https://image.tmdb.org/t/p";
  const size = "w1280";
  const sizePoster = "w200";
  // console.log(props.movies.id);

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
          src={`${baseImgUrl}/${size}${props.movies.backdrop_path}`}
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
              {" "}
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

            {/* <p> Return in: {moment(today, returnDay).fromNow()}</p> */}
            {/* esto  cuenta cuantos son los  los dias de alquiler  */}
          </div>
          <div
            id="Botom"
            className="newUserBoton"
            onClick={() => ejecutaRegistro()}
          >
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
}))(RentMovie);
