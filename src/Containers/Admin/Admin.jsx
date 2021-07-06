import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import moment from "moment";

const Admin = (props) => {
  const token = props.credentials.token;
  const userAdmin = props.credentials.user.isAdmin;

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    datosAdmin();
  }, []);

  const datosAdmin = async () => {
    axios
      .get("http://localhost:3005/orders/", {
        headers: { authorization: "Bearer " + token },
      })

      .then((res) => {
        setOrders(res.data);
      })

      .catch((error) => {
        console.log(error);
      });
  };

  if (token && userAdmin === true) {

    return <div className="adminBody">
 <div className="padreContainer">
 <div className="containerCards">
   {orders?.map((order) => {
     return (
       <div className="card">
         <img
           className="moviePoster"
           src={
             !order.posterMovie
               ? "../../img/bollywood.jpg"
               : `https://image.tmdb.org/t/p/w200/${order.posterMovie}`
           }
           alt="poster"
         ></img>
         <div className="textoAdmin">
           <p>Pelicula: {order.idMovie}</p>
           <p>
             Inicio alquiler: <br />
             {moment(order.rentalDate).format("DD-MM-YYYY")}
           </p>
           <p>
             Fin alquiler: <br />
             {moment(order.returnDate).format("DD-MM-YYYY")}
           </p>
           <p>
             Alquilada por: <br />
              ID : {order.idUser}
           </p>
           {/* <p> */}
             {/* Precio: <br /> */}
             {/* {orders} € */}
           {/* </p> */}
         </div>
       </div>
     );
   })}
 </div>
 </div>

    </div>;
  } else {
    return <div> no estas logueado como admin no puedes entrar Aqui </div>;
  }
};

export default connect((state) => ({
  credentials: state.credentials,
  movies: state.movies,
  ordersRent: state.ordersRent,
}))(Admin);
