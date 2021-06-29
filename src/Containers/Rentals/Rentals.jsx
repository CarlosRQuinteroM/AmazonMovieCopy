import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Card } from "antd";
import moment from "moment";

// import { ADD_RENT } from '../../redux/type';

const Rentals = (props) => {
  const { Meta } = Card;
  let token = props.credentials.token;
  // console.log(token)

  const [rentalUsers, setRentalUser] = useState([]);

  const baseImgUrl = "https://image.tmdb.org/t/p";
  const size = "w200";

  useEffect(() => {
    setTimeout(() => {
      getUserRentals();
    }, 1000);
  }, []);
  const getUserRentals = async () => {
    let body = {
      idUser: props.credentials.idUser,
    };

    try {
      let res = await axios.post(
        `http://localhost:3005/orders/orderuserid/`,
        body,
        { headers: { authorization: "Bearer " + token } }
      );
      //GUARDANDO EL REDUX
      // console.log(res)
      setRentalUser(res.data);
      // props.dispatch({ type: ADD_RENT, payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };
  console.log(rentalUsers);

  if (rentalUsers === "") {
    return (
      <div>
        <h3>
          lo siento ${props.credentials.user.name} $
          {props.credentials.user.last_name1} aun no tienes ningun alquiler.
        </h3>
      </div>
    );
  } else {
    return (
      <div className="allOrders">
        <div className="orderContent">
          {rentalUsers.map((rentalUsers, index) => (
            <div key={index} className="orderCards">
              <img
                src={`${baseImgUrl}/${size}${rentalUsers.posterMovie}`}
                alt="poster"
              />
              <div className="info">
                <h2>{rentalUsers.movieTitle}</h2>

                <h3 className="order">
                  
                  Rental Date : {moment(rentalUsers.rentalDate).format("LL")}
                </h3>
                <p className="order">
                  
                  Return Date : {moment(rentalUsers.returnDate).format("LL")}
                </p>
              </div>
              <div className="buttons1">
                {/* <div
                      className="buttonUpdateA"
                      onClick={() => saveAppointment(order)}
                  >
                      UPDATE
                  </div> */}
                {/* <div className="buttonDeleteA" onClick={() => deleteAppointment(order)}>REMOVE</div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  console.log();
};

export default connect((state) => ({
  credentials: state.credentials,
  ordersRent: state.ordersRent,
}))(Rentals);
