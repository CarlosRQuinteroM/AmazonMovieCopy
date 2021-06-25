import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const InfoMovies = (props) => {
  let history = useHistory();
  const baseImgUrl = "https://image.tmdb.org/t/p";
  const size = "w1280";
  const sizePoster = "w200";

  if (props.movies !== "") {
    {
      console.log(props.movies);
    }
    return (
      <div className="selectMovie">
        <img
          className="backdrop_path"
          src={`${baseImgUrl}/${size}${props.movies.backdrop_path}`}
          alt="backdrop_path"
        ></img>
        <div className="infoSelectMovie">
          <div className="imgPoster">
            <img
              className="poster_path"
              src={`${baseImgUrl}/${sizePoster}${props.movies.poster_path}`}
              alt="backdrop_path"
            ></img>
          </div>
          <div className="infoPoster">
            <h2>
              {props.movies.title}. ({props.movies.release_date})
            </h2>
            <div className="infoPoster2">
              <h3>Original Title: {props.movies.original_title}</h3>
            </div>
            <div className="infoPoster3">
              <h3>Original Title: {props.movies.overview}</h3>
            </div>
            <div className="infoPoster4">
              <h4>Me Gusta: {props.movies.vote_count}</h4>
            </div>
          </div>
          <div className="botonAlquiler" >
           
          </div>
        </div>
      </div>
    );
  } else {
  }
};

export default connect((state) => ({
  credentials: state.credentials,
  movies: state.movies,
}))(InfoMovies);
