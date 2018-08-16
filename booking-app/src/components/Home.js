import React, { Component } from 'react';
import TestImage from './../images/test.jpg';

class Home extends Component {
    render() {
        return (
            <div className="wrapper">
                <header className="home-header">

                    <h1 className="App-title">Le'licious</h1>
                    <h2>Your heaven for tasty food</h2>
                    <button>Book a table</button>
                </header>
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