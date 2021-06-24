import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { useHistory } from 'react-router'


const Profile = (props) => {
let history = useHistory()

    console.log(props.credentials.user)
    if (props.credentials?.user.token !== '') {
        return (
            <div className="bodyProfile">
                <div className="cardProfile">
                    <div className="profile"> <img className="imgProfile" src={props.credentials.user.imgUser} alt="profile" /></div>
                    <div className="textProfile">
                        <div><p>Nombre: {props.credentials.user.name}</p></div>
                        <div><p> Apellido: {props.credentials.user.last_name1}</p></div>
                        <div><p>Segundo Apellido: {props.credentials.user.last_name2}</p></div>
                        <div><p>Email: {props.credentials.user.email}</p></div>
                        <div><p>Teléfono: {props.credentials.user.phone}</p></div>
                        <div><p>País{props.credentials.user.country}</p></div>
                        <div><p>Ciudad{props.credentials.user.city}</p></div>
                        <div><p>Dirección: {props.credentials.user.shipping_address}</p></div>
                        <div><p>Nacimiento{moment(props.credentials.user.birthday).format('LL')}</p></div>
                    </div>
                </div>
                <div className="reservas">
                    {/* <Reservas /> */}
                    
                </div>
            </div>
        )
    } else {
        setTimeout(() => {
            history.push("/login");
        }, 3000)
        return (
            <div>NO ESTAS LOGEADO, NO PUEDES ENTRAR AQUI</div>
        )
    }

}

export default connect((state) => ({ 
    credentials:state.credentials
  }))(Profile)
