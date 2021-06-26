import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import moment from "moment";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";


const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(7),
    marginRight: theme.spacing(1),
    width: 250,
  },
}));


const RentMovie = (props) => {

  let history = useHistory();

  const today = moment();


  const baseImgUrl = "https://image.tmdb.org/t/p";
  const size = "w1280";
  const sizePoster = "w200";
  console.log(props.movies);

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

            <p>Today: {today.format("DD-MM-YYYY")}</p>
            {/* <p> Return in: {moment(today,  date ).fromNow()}</p> */}
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
