import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const RentalVideo = (props) => {
  let history = useHistory();

  let token = props.credentials.token;
  let movie_id = props.ordersRent?.idMovie;

      //  console.log(movie_id);
  //   console.log(token);

  const [videoMovie, setVideoMovie] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      video();
    }, 500);
  }, []);

  console.log(props.ordersRent)

  const video = async () => {
    try {
      let res = await axios.get(
        `https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US`);

      setVideoMovie(res.data.results);

      

    } catch (error) {
      console.log(error);
    }
  };

  console.log(videoMovie);
  // console.log(videoMovie[0]?.key)

  if (!token) {
    setTimeout(() => {
      history.push("/login");
    }, 2000);

    return (
      <div className="noStaslogueado">
        <h1>Lo siento no estas Logueado</h1>
      </div>
    );
  } else {
      let key = videoMovie[0]?.key;
      console.log(key)
    return (
      <div>
        <iframe title="Trailer" width="80%" height="100%" src={`https://www.youtube.com/embed/${key}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>

      </div>
    );
  }
};

export default connect((state) => ({
  credentials: state.credentials,
  ordersRent: state.ordersRent,
}))(RentalVideo);

//https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=<<api_key>>&language=en-US

{/* <iframe title="Trailer" src="https://www.youtube.com/embed/{}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe> */}