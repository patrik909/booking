import React, { Component } from 'react';
import TestImage from './../images/test.jpg';

class Home extends Component {
    render() {
        return (
            <div className="wrapper">
             <div className="jumbotron">
                <header className="home-header">

                    <h1 className="App-title">Le'licious</h1>
                    <h2>Your heaven for tasty food</h2>
                    <button type="button" className="btn btn-light">Book a table</button>

                </header>
                </div>
                <main>

                    <div className="content">
                        <section>
                            <article>
                                <img src={TestImage} alt="test" />
                            </article>
                            <article>
                                <img src={TestImage} alt="test" />
                            </article>
                            <article>
                                <img src={TestImage} alt="test" />
                            </article>
                        </section>
                    </div>
                </main>
                <footer>credits</footer>
            </div>

        );
    }
}

export default Home;