import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "antd";
import { connect } from "react-redux";
import { ADD_MOVIE } from "../../redux/type";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ScrollWar = (props) => {
  let history = useHistory();
  const [moviesWar, setMoviesWar] = useState([]);

  const baseImgUrl = "https://image.tmdb.org/t/p";
  const size = "w200";

  useEffect(() => {
    setTimeout(() => {
      finWarMovie();
    }, 500);
  }, []);

  const finWarMovie = async () => {
    try {
      let res = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?api_key=210d6a5dd3f16419ce349c9f1b200d6d&with_genres=10752"
      );
      setMoviesWar(res.data.results);
      // console.log(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const selectMovie = async (movie) => {
    try {
      props.dispatch({ type: ADD_MOVIE, payload: movie });
      setTimeout(() => {
        history.push("/infomovie");
      }, 500);
    } catch (err) {
      console.log(err);
    }
  };

  if (moviesWar === "") {
    return <div>cargando</div>;
  } else {
    return (
      <div className="ScollHorizontal">
        <h1 id="titleScroll">War</h1>
        <div className="scrolling-wrapper">
          {moviesWar?.map((TopWar) => {
            return (
              <Card
                className="card"
                key={TopWar.id}
                cover={
                  <img
                    className="imgMovie"
                    src={`${baseImgUrl}/${size}${TopWar.poster_path}`}
                    alt="poster_path"
                    onClick={() => selectMovie(TopWar)}
                  />
                }
              >
                <div className="voteAverage">
                  {/* <p>{TopWar.title}</p> */}
                  <FontAwesomeIcon className="faStart" icon={faStar} />
                  {TopWar.vote_average}/10
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    );
  }
};

export default connect((state) => ({
  credentials: state.credentials,
  movies: state.movies,
}))(ScrollWar);
