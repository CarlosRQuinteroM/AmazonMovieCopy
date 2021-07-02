import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const SearchByTitleView = (props) => {

  let history = useHistory();
  const [searchView, setsearchView] = useState([]);

  const baseImgUrl = "https://image.tmdb.org/t/p";
  const size = "w200";

  useEffect(() => {
    setsearchView(props.movies);
  }, [])
  
  if (!props.movies[0]?.id) {
    setTimeout(() => {
      history.push("/");
    }, 3000);
    return( <div>no has buscando ninguna pelicula </div>);
  } else {
    return (
      <div className="allOrders">
        <div className="orderContent">
            {searchView.map((searchView) => {
                return(
                    <div key={searchView.id}>
                        <img src={`${baseImgUrl}/${size}${searchView.poster_path}`}
                        alt="poster_path"/>

                    </div>
                )
            })}

        </div>
        </div>
        
        
    )
};
}

export default connect((state) => ({
  credentials: state.credentials,
  movies: state.movies,
}))(SearchByTitleView);
