import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'; 
import Create from './components/Create.Component';
import index from './components/index.Component';
import Edit from './components/Edit.Component';

import './App.css';

import Home from './components/Home.Component';
import Login from './components/Login.Component';
import Register from './components/Register.Component';
import UserRequirements from './components/UserRequirements.Component';
import Profile from './components/Profile.Component';
import Plans from './components/Plans.Component';
import Search from './components/Search.Component';
import Navbar from './components/Navbar';
import Email from './components/Email.component';
import Rating from './components/Rating';
import CustomerFeedback from './components/CustomerFeedback';



class App extends Component{
    

  render(){
     
    return(
     
      <Router>
        <div className="App bg-image">
          <Navbar/>
          <Route exact path = '/' component = {Home}/> 
           <div className="container">
          <Route exact path = '/register' component = {Register}/>
          <Route exact path = '/login' component = {Login}/>
          <Route exact path = '/profile' component = {Profile}/>
          <Route exact path = '/create' component = {Create}/>
          <Route exact path = '/edit/:id' component = {Edit}/>
          <Route exact path = '/userrequirements' component = {UserRequirements}/>
          <Route exact path = '/index' component = {index}/>
          <Route exact path = '/plans' component = {Plans}/>
          <Route exact path = '/search' component = {Search}/>
          <Route exact path = '/email' component = {Email}/>
          <Route exact path = '/rating' component = {Rating}/>
          <Route exact path = '/customerfeedback' component = {CustomerFeedback}/>
           </div>
        </div>
    </Router>

    
    );
  }
}

export default App;