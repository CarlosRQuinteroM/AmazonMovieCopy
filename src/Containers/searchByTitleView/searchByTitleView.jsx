import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import bollywood from "../../img/bollywood.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { ADD_MOVIE } from "../../redux/type";
import Spinner from "../../Components/Spinner/Spinner";

const SearchByTitleView = (props) => {
  let history = useHistory();
  const [searchView, setsearchView] = useState([]);

  useEffect(() => {
    setsearchView(props.movies);
    selectMovie()
  }, []);

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

  if (!searchView) {
    setTimeout(() => {
      history.push("/");
    }, 3000);
    return <div>no has buscando ninguna pelicula </div>;
    
  }else if (!props.movies[0]?.id) {
    return (
      <div className="spinner">
        <Spinner />
      </div>
    );
   
   
   
  } else {
    return (
      <div className="allOrders">
        <div className="orderContent">
          {searchView.map((searchView) => {
            return (
              <div className="orderCards" key={searchView.id}>
                <img
                  className="poster_path"
                  src={!searchView.poster_path
                      ? bollywood
                      : `https://image.tmdb.org/t/p/w200/${searchView.poster_path}`}
                  onClick={() => selectMovie(searchView)}
                  alt="poster_path"
                />

                <div className="voteAverage">
                  {/* <p>{TopComedy.title}</p> */}
                  <FontAwesomeIcon className="faStart" icon={faStar} />
                  {searchView.vote_average}/10
                </div>
              </div>
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
}))(SearchByTitleView);
