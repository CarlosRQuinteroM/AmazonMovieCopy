import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { ADD_MOVIE } from "../../redux/type";
import axios from "axios";
import { Input } from "antd";

const SearchByTitle = (props) => {
  let history = useHistory();
  const [movie, setMovie] = useState({
    input: "",
  });
  const [msgError, setMensajeError] = useState("");

  useEffect(() => {
    findTitle();
  }, []);
  const [errors, setErrors] = useState({
    eInput: "",
  });

  // Esto es un Handler
  const updateDatos = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };
  const findTitle = async () => {
    let query = document.getElementById("title").value;
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=210d6a5dd3f16419ce349c9f1b200d6d&query=${query}`
      )
      .then((res) => {
        props.dispatch({ type: ADD_MOVIE, payload: res.data.results });
        setMovie(res.data?.results);
        document.getElementById("title").value = "";
        history.push("/searchview");
      })
      .catch(() => {
        return Error("Lo siento pelicula no la tenemos disponible");
      });
  };
  const checkError = (arg) => {
    let RexpInput = /^[A-Za-z][A-Zaz0-9]*$/;
    switch (arg) {
      case "input":
        if (!RexpInput.test(movie.input)) {
          setErrors({ ...errors, input: "los Caracteres no son validos" });
        } else {
          setErrors({ ...errors, eInput: "" });
        }

        break;

      default:
        break;
    }
  };
  // console.log(movie);
  return (
    <div>
      <Input
        className="option"
        type="text"
        id="title"
        name="input"
        placeholder="Busca peliculas"
        onBlur={() => checkError("input")}
        onClick={() => findTitle(updateDatos)}
      />
      <div className="error">{errors.eInput}</div>
    </div>
  );
};
export default connect((state) => ({
  credentials: state.credentials,
  movies: state.movies,
}))(SearchByTitle);
