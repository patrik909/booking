import React, { Component } from 'react';
import logo from './logo.svg';
import BookingPage from './components/BookingPage.js';
import './App.css';

class App extends Component {
    
    componentDidMount(){ 
        this.fetcher();
    }

    fetcher = () => {
//fetch('http://localhost:3000/booking') 
//    .then(function(response ){
//                return response.json();
//            }).then((fetched) => {
//                console.log(fetched)
//            }).catch(function(error) {
//                console.log(error);
//            });
    }
  render() {
    return (
      <div className="App">
        <BookingPage />
      </div>
    );
  }
}

export default App;
