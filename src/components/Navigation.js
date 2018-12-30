import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        return (
            <section className="wrapper-profile-page">
                <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <h1 class="navbar-brand">
                    <img src={process.env.PUBLIC_URL + '/img/kyyti-logo.png'} alt="logo" />

                    </h1>
                 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                        <i className="material-icons">
                        menu</i>
                    </span>
                </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <button className="btn " href="#">Adding New Order</button>
                            </li>
                            <li className="nav-item">
                                <button className="btn " href="#">My Account</button>
                            </li>
                            <li className="nav-item">
                                <button className="btn delete-button " href="#">Log out</button>
                            </li>
                        </ul>                
                    </div>
                    </div>
                </nav>
            </section>    
        );
    }
};

export default Navigation;
