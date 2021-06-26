import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.scss';
import Footer from './Components/Footers/Footer';
import Header from './Components/Header/Header';
import Home from './Containers/Home/Home';
import InfoMovies from './Containers/InfoMovies/InfoMovies';
import Login from './Containers/Login/Login';
import Profile from './Containers/Profile/Profile';
import Register from './Containers/Register/Register';
import RentMovie from './Containers/RentMovie/RentMovie';


function App() {
  return (
    <div className="App">

      <BrowserRouter>

      <Header/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register}/>
        <Route path="/profile" exact component={Profile} />
        <Route path='/infomovie' exact component={InfoMovies}/>
        <Route path='/rentmovie' exact component={RentMovie}/>
        
        
      </Switch>
      <Footer/>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
