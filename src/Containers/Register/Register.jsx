import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Register = () => {
  let history = useHistory();

  const [datosUser, setDatosUser] = useState({
    name: "",
    last_name1: "",
    last_name2: "",
    country: "",
    city: "",
    shipping_address: "",
    billing_address: "",
    email: "",
    password: "",
    phone: "",
    birthday: "",
    dni: "",
  });
  // const [msgError, setMensajeError] = useState("");

  // hooks controlador de errores registros
  // const [errors, setErrors] = useState({
  //     eName: "",
  //     eSurname: "",
  //     eEmail: "",
  //     ePassword: "",
  //     ephoneNumber: "",
  //     eBirthday: "",
  //   });

  const updateFormulario = (e) => {
    setDatosUser({ ...datosUser, [e.target.name]: e.target.value });
  };

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
      console.log(user)

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
            //   onBlur={() => checkError("name")}
          ></input>
          {/* <div className="error">{errors.eName}</div> */}

          <input
            className="inputBase"
            type="text"
            name="last_name1"
            onChange={updateFormulario}
            placeholder="last_name1"
            //   onBlur={() => checkError("last_name1")}
          ></input>
          {/* <div className="error">{errors.elast_name1}</div> */}
          <input
            className="inputBase"
            type="text"
            name="last_name2"
            onChange={updateFormulario}
            placeholder="last Name"
            //   onBlur={() => checkError("last_name2")}
          ></input>
          {/* <div className="error">{errors.elast_name2}</div> */}

          <input
            className="inputBase"
            type="email"
            name="email"
            onChange={updateFormulario}
            placeholder="Email"
            //   onBlur={() => checkError("email")}
          ></input>
          {/* <div className="error">{errors.eEmail}</div> */}
          <input
            className="inputBase"
            type="string"
            name="password"
            onChange={updateFormulario}
            placeholder="Password"
            //   onBlur={() => checkError("password")}
          ></input>
          {/* <div className="error">{errors.ePassword}</div> */}
          <input
            className="inputBase"
            type="tel"
            name="phone"
            onChange={updateFormulario}
            placeholder="Phone +34 000 000 000"
            //   onBlur={() => checkError("phone")}
          ></input>
          {/* <div className="error">{errors.ephone}</div> */}

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
            type="string"
            name="birthday"
            onChange={updateFormulario}
            placeholder="YYYY/MM/DD"
            //   onBlur={() => checkError("birthday")}
          ></input>
          {/* <div className="error">{errors.eBirthday}</div> */}

          <input
            className="inputBase"
            type="string"
            name="dni"
            onChange={updateFormulario}
            placeholder="Dni"
            //   onBlur={() => checkError("dni")}
          ></input>
          {/* <div className="error">{errors.eDni}</div> */}

          <input
            className="inputBase"
            type="string"
            name="shipping_address"
            onChange={updateFormulario}
            placeholder="shipping_address"
            //   onBlur={() => checkError("shipping_address")}
          ></input>
          {/* <div className="error">{errors.eshipping_address}</div> */}

          <input
            className="inputBase"
            type="string"
            name="billing_address"
            onChange={updateFormulario}
            placeholder="billing_address"
            //   onBlur={() => checkError("billing_address")}
          ></input>
          {/* <div className="error">{errors.ebilling_address}</div> */}

          <button
            className="botonRegister"
            type="submit"
            onClick={() => ejecutaRegistro()}
          >
            REGISTRAR
          </button>
          {/* <div>{msgError}</div> */}
        </div>
        <div className="textRight">
          <p></p>
          {/* <img className="imageCena" src={cena} alt="cena" /> */}
        </div>
      </div>
  );
};

export default Register;
