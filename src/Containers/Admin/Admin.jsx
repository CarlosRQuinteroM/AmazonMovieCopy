import React from 'react'
import { connect } from 'react-redux'


const Admin = (props) => {
    const token = props.credentials.token; 
    const userAdmin = props.credentials.user.isAdmin;
    
    if (token && userAdmin === true) {
        return (
            <div>
                esto es la vista admin
            </div>
        )
        
    } else {
        return(
            <div> no estas logueado como admin no puedes entrar Aqui </div>  
        )
          
    }
  
  
  
  
  
}



export default connect((state) => ({
    credentials: state.credentials,
    movies: state.movies,
    ordersRent: state.ordersRent,
  }))(Admin);
  
