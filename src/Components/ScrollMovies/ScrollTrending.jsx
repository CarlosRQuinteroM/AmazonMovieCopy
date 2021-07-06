import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "antd";
import { connect } from "react-redux";
import { ADD_MOVIE } from "../../redux/type";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ScrollComedy = (props) => {
  let history = useHistory();
  const [moviesTrending, setMoviesTrending] = useState([]);
  const baseImgUrl = "https://image.tmdb.org/t/p";
  const size = "w200";

  useEffect(() => {
    setTimeout(() => {
      findComedyMovie();
    }, 500);
  }, []);

  const findComedyMovie = async () => {
    try {
      let res = await axios.get(
        "https://api.themoviedb.org/3/trending/movie/week?api_key=210d6a5dd3f16419ce349c9f1b200d6d"
      );
      setMoviesTrending(res.data.results);

      props.dispatch({ type: ADD_MOVIE, payload: res.data.results });
      // console.log(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(setMoviesComedy);

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

  if (moviesTrending === "") {
    return <div>cargando</div>;
  } else {
    return (
      <div className="ScollHorizontal">
        <h1 id="titleScroll">Trending</h1>
        <div className="scrolling-wrapper">
          {moviesTrending?.map((TopTrending) => {
            return (
              <Card
                className="card"
                key={TopTrending.id}
                cover={
                  <img
                    className="imgMovie"
                    src={`${baseImgUrl}/${size}${TopTrending.poster_path}`}
                    alt="poster_path"
                    onClick={() => selectMovie(TopTrending)}
                  />
                }
              >
                <div className="voteAverage">
                  {/* <p>{TopComedy.title}</p> */}
                  <FontAwesomeIcon className="faStart" icon={faStar} />
                  {TopTrending.vote_average}/10
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
}))(ScrollComedy);
