import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Register = () => {
  let history = useHistory();

  const [datosUser, setDatosUser] = useState({
    name: "",
    last_name1: "",
    country: "",
    city: "",
    shipping_address: "",
    email: "",
    password: "",
    phone: "",
    birthday: "",
    dni: "",
  });
  const [msgError, setMensajeError] = useState("");

  // hooks controlador de errores registros
  const [errors, setErrors] = useState({
    eName: "",
    elast_name1: "",
    eEmail: "",
    ePassword: "",
    ePhone: "",
    eBirthday: "",
    eshipping_address: "",
    Edni: "",
  });

  const updateFormulario = (e) => {
    setDatosUser({ ...datosUser, [e.target.name]: e.target.value });
  };

  const checkError = (arg) => {
    var nifRexp = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]$/i;
    var nieRexp = /^[XYZ][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKET]$/i;
    var patt = new RegExp(/^[A-Za-z0-9\s]+$/g);

    switch (arg) {
      case "name":
        if (
          !/^(?=.{3,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+[-!$%^&*()_+|~=`{}";'<>?,.]+)*$/.test(
            datosUser.name
          )
        ) {
          setErrors({ ...errors, eName: "El nombre introducido no es valido" });
        } else {
          setErrors({ ...errors, eName: "" });
        }
        break;

      case "last_name1":
        if (
          !/^(?=.{3,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+[-!$%^&*()_+|~=`{}";'<>?,.]+)*$/.test(
            datosUser.last_name1
          )
        ) {
          setErrors({
            ...errors,
            elast_name1: "El apellido introducido no es valido",
          });
        } else {
          setErrors({ ...errors, elast_name1: "" });
        }
        break;

      case "email":
        if (datosUser.email.length < 1) {
          setErrors({
            ...errors,
            eEmail: "El campo email no puede estar vacío.",
          });
        } else if (
          !/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/.test(
            datosUser.email
          )
        ) {
          setErrors({
            ...errors,
            eEmail: "Introduce el formato de email valido ejemplo@ejemplo.com",
          });
        } else {
          setErrors({ ...errors, eEmail: "" });
        }
        break;

      case "password":
        if (
          !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*)(?=.{8,})/.test(
            datosUser.password
          )
        ) {
          setErrors({
            ...errors,
            ePassword:
              "contraseña de mínimo 8 caracteres, mayúsculas, minúsculas, un número",
          });
        } else {
          setErrors({ ...errors, ePassword: "" });
        }
        break;

      case "phone":
        if (
          !/^(\+34|0034|34)?[-]*(6|7|9)[-]*([0-9][ -]*){8}/.test(
            datosUser.phone
          )
        ) {
          setErrors({
            ...errors,
            ePhone: "Numero introducido no es valido",
          });
        } else {
          setErrors({ ...errors, ePhone: "" });
        }
        break;

      case "birthday":
        if (
          !/^(19|20)\d\d([- /.])(0[1-9]|1[012])\2(0[1-9]|[12][0-9]|3[01])$/.test(
            datosUser.birthday
          )
        ) {
          setErrors({
            ...errors,
            eBirthday: "Por favor escriba una fecha del tipo YYYY/MM/DD",
          });
        } else {
          setErrors({ ...errors, eBirthday: "" });
        }
        break;

      case "dni":
        if (!nifRexp.test(datosUser.dni) && !nieRexp.test(datosUser.dni)) {
          setErrors({
            ...errors,
            eDni: "Por favor escriba una identificacion correcta",
          });
        } else {
          setErrors({ ...errors, eDni: "" });
        }
        break;

      case "dni":
        if (!patt.test(datosUser.shipping_address)) {
          setErrors({
            ...errors,
            eshipping_address: "Por favor escriba una identificacion correcta",
          });
          } else {
               setErrors({ ...errors, shipping_address: "" });
        }
        break;

      default:
        break;


    }
  };

  useEffect(() => {
    // este useEffect se ejecuta solo una  vez cuando el componente esta compntado
    // Este if comprueba que los campos del formulario esten llenos
  }, []);

  const ejecutaRegistro = async () => {
    let user = {
      name: datosUser.name,
      last_name1: datosUser.last_name1,
      last_name2: datosUser.last_name2,
      email: datosUser.email,
      dni: datosUser.dni,
      password: datosUser.password,
      phone: datosUser.phone,
      shipping_address: datosUser.shipping_address,
      billing_address: datosUser.billing_address,
      country: document.getElementById("opcionCountry").value,
      city: document.getElementById("opcionCity").value,
      birthday: datosUser.birthday,
    };

    axios
      .post("http://localhost:3005/users", user)
      .then((res) => {})
      .catch((error) => {
        console.log(error);
      });
    console.log(user);

    setTimeout(() => {
      history.push("/login");
    }, 750);
  };

  return (
    <div className="formularios">
      <div className="formulario1">
        <input
          className="inputBase"
          type="text"
          name="name"
          onChange={updateFormulario}
          placeholder="Name"
          onBlur={() => checkError("name")}
        ></input>
        <div className="error">{errors.eName}</div>

        <input
          className="inputBase"
          type="text"
          name="last_name1"
          onChange={updateFormulario}
          placeholder="Lastname"
          onBlur={() => checkError("last_name1")}
        ></input>
        <div className="error">{errors.elast_name1}</div>

        <input
          className="inputBase"
          type="email"
          name="email"
          onChange={updateFormulario}
          placeholder="Email"
          onBlur={() => checkError("email")}
        ></input>
        <div className="error">{errors.eEmail}</div>
        <input
          className="inputBase"
          type="string"
          name="password"
          onChange={updateFormulario}
          placeholder="Password"
          onBlur={() => checkError("password")}
        ></input>
        <div className="error">{errors.ePassword}</div>
        <input
          className="inputBase"
          type="tel"
          name="phone"
          onChange={updateFormulario}
          placeholder="Phone +34 000 000 000"
          onBlur={() => checkError("phone")}
        ></input>
        <div className="error">{errors.ePhone}</div>

        <select
          className="inputBase"
          name="country"
          onChange={updateFormulario}
          id="opcionCountry"
        >
          <option disabled>Country</option>
          <option value="spain">Spain</option>
        </select>

        <select
          className="inputBase"
          name="country"
          onChange={updateFormulario}
          id="opcionCity"
        >
          <option disabled>City</option>
          <option value="valencia">Valencia</option>
        </select>

        <input
          className="inputBase"
          type="date"
          name="birthday"
          // max="2021-12-31"
          // min="2000-01-02"
          onChange={updateFormulario}
          placeholder="Birthday"
          onchange="this.className=(this.value!=''?'has-value':'')"
          onBlur={() => checkError("birthday")}
        ></input>
        <div className="error">{errors.eBirthday}</div>

        <input
          className="inputBase"
          type="string"
          name="dni"
          onChange={updateFormulario}
          placeholder="Dni"
          onBlur={() => checkError("dni")}
        ></input>
        <div className="error">{errors.eDni}</div>

        <input
          className="inputBase"
          type="string"
          name="shipping_address"
          onChange={updateFormulario}
          placeholder="shipping_address"
          onBlur={() => checkError("shipping_address")}
        ></input>
        <div className="error">{errors.eshipping_address}</div>

        <button
          className="botonRegister"
          type="submit"
          onClick={() => ejecutaRegistro()}
        >
          REGISTRAR
        </button>
        <div>{msgError}</div>
      </div>
      <div className="textRight">
        <p></p>
        {/* <img className="imageCena" src={cena} alt="cena" /> */}
      </div>
    </div>
  );
};

export default Register;
