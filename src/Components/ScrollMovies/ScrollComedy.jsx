import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "antd";
import { connect } from 'react-redux'
import { ADD_MOVIE } from "../../redux/type"
import { useHistory } from "react-router-dom";


const ScrollComedy = (props) => {
  let history = useHistory();
  const [moviesComedy, setMoviesComedy] = useState([]);


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
        "https://api.themoviedb.org/3/discover/movie?api_key=210d6a5dd3f16419ce349c9f1b200d6d&with_genres=35"
      );
      setMoviesComedy(res.data.results);

      props.dispatch({ type: ADD_MOVIE , payload: res.data.results });
      // console.log(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(setMoviesComedy);


  const selectMovie = async (movie) => {
    try{

      props.dispatch({type:ADD_MOVIE, payload: movie});
      setTimeout(() => {
        history.push('/infomovie');
      }, 500);
      


  }catch (err){
       console.log(err);      
       }      

  }

  if (moviesComedy === "") {
    return <div>cargando</div>;
  } else {
    return (
         <div>
             <h3 id="titleScroll">Comedy</h3>
      <div className="scrolling-wrapper">
        {moviesComedy?.map((TopComedy) => {
          return (
            <Card
            className="card"
            key={TopComedy.id}
            cover={
              <img
                className="imgMovie"
                src={`${baseImgUrl}/${size}${TopComedy.poster_path}`}
                alt="poster_path"
                onClick={()=> selectMovie(TopComedy)} 
              />
            }
            >
            </Card>
          );
        })}
      </div>
      </div>
    );
  }
};
export default connect((state) => ({ 
  credentials:state.credentials,
  movies:state.movies
  
}))(ScrollComedy);

