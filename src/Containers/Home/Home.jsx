import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card } from "antd";
import CarouselComponent from "../../Components/Scroll/Scroll"
import ScrollTopRate from "../../Components/ScrollMovies/ScrollTopRate"
import ScrollComedy from "../../Components/ScrollMovies/ScrollComedy"
import ScrollWar from "../../Components/ScrollMovies/ScrollWar"
import { connect } from "react-redux";





const Home = (props) => {

  const [moviesTopRate, setMoviesTopRate] = useState([]);
  const [moviesComedy, setMoviesComedy] = useState([]);
  const [moviesWar, setMoviesWar] = useState([]);



  if (moviesTopRate === "") {

    return <div>cargando</div>;

  } else {
    return (
        
      <div className="HomeVista">

           <CarouselComponent />
           <ScrollTopRate/>
           <ScrollComedy/>
           <ScrollWar/>

      </div>
    );
  }
};
export default connect() (Home);
