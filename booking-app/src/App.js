// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// class App extends Component {
//
//     componentDidMount(){
//         this.fetcher();
//     }
//
//     fetcher = () => {
// fetch('http://localhost:3000/booking')
//     .then(function(response ){
//                 return response.json();
//             }).then((fetched) => {
//                 console.log(fetched)
//             }).catch(function(error) {
//                 console.log(error);
//             });
//     }
//   render() {
//     return (
//       <div className="App">
//         Hej
//       </div>
//     );
//   }
// }
//
// export default App;

import React from 'react';
import Booking from './components/Booking';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from './components/Home.js'

// const Home = () => (
//   <div>
//     <h2>Home</h2>
//     <h3>Kors i krösamoset</h3>
//   </div>
// )

const Contact = () => (
  <div>
    <h2>Contact</h2>
  </div>
)

const Reservation = () => (
  <div>
    <h2>Reservation</h2>
    <Booking />
  </div>
)

const BasicExample = () => (
  <Router>
    <div className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
        <li><Link to="/Reservation">Reservation</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/Contact" component={Contact}/>
      <Route path="/Reservation" component={Reservation}/>
    </div>
  </Router>
)

export default BasicExample