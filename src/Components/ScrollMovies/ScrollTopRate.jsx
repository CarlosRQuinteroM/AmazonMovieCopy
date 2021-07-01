import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "antd";
import { connect } from "react-redux";
import { ADD_MOVIE } from "../../redux/type";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ScrollTopRate = (props) => {
  let history = useHistory();

  const [moviesTopRate, setMoviesTopRate] = useState([]);

  const baseImgUrl = "https://image.tmdb.org/t/p";
  const size = "w200";

  useEffect(() => {
    setTimeout(() => {
      findTopRated();
    }, 500);
  }, []);

  const findTopRated = async () => {
    try {
      let res = await axios.get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&page=2"
      );
      setMoviesTopRate(res.data.results);

      props.dispatch({ type: ADD_MOVIE, payload: res.data.results });
      // console.log(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(setMoviesTopRate);
  console.log(moviesTopRate);

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

  if (moviesTopRate === "") {
    return <div>cargando</div>;
  } else {
    return (
      <div className="ScollHorizontal">
        <h1 id="titleScroll">TopRate</h1>
        <div className="scrolling-wrapper">
          {/* {console.log(moviesTopRate)} */}
          {moviesTopRate?.map((TopRate) => {
            return (
              <Card
                className="card"
                key={TopRate.id}
                cover={
                  <img
                    className="imgMovie"
                    src={`${baseImgUrl}/${size}${TopRate.poster_path}`}
                    alt="poster_path"
                    onClick={() => selectMovie(TopRate)}
                  />
                }
              >
                <div className="voteAverage">
                  {/* <p>{TopRate.title}</p> */}
                  <FontAwesomeIcon className="faStart" icon={faStar} />
                  {TopRate.vote_average}/10
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
}))(ScrollTopRate);
