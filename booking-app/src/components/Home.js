import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//images
import Food from './../images/food.jpg';
import ChefHat from './../images/logo.svg';
import Drinks from './../images/drinks.jpg';
import EnjoyDinner from './../images/enjoy-dinner.jpg';

class Home extends Component {
  render() {
    return (
      <div className=" home-wrapper">
        <div className="reservation-wrapper">
          <div className="jumbotron  jumbotron-fluid home-jumbo">
            <div className="container container-jumbo">
              <h1 className="display-4 home-headline">
                Le'licious
                <img src={ChefHat} alt="Chef Hat" />
              </h1>
              <p className="lead">Your heaven for tasty food</p>

              <p className="lead">
                <Link to="/Reservation">
                  <button type="button" className="btn btn-primary btn-lg">
                    Book a table
                  </button>
                </Link>
              </p>
            </div>
          </div>
        </div>
        <main>
          {/* card section */}
          <div className="card-group">
            <div className="card">
              <img className="card-img-top" src={EnjoyDinner} alt="Card  cap" />
              <div className="card-img-overlay d-flex">
                <div className="my-auto mx-auto text-center">
                  <h2 className="card-title">Lovely atmosphere</h2>
                </div>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src={Food} alt="Card  cap" />
              <div className="card-img-overlay d-flex">
                <div className="my-auto mx-auto text-center">
                  <h2 className="card-title">Heavenly food</h2>
                </div>
              </div>
            </div>

            <div className="card">
              <img className="card-img-top" src={Drinks} alt="Card  cap" />
              <div className="card-img-overlay d-flex">
                <div className="my-auto mx-auto text-center">
                  <h2 className="card-title">Amazing drinks</h2>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Home;
