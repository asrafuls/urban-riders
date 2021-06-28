import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../Login/auth';
import logo from './../../Logo/logo_1.png';
import './Header.css';

const Header = () => {

    const { user } = useAuth()

    return (
        <div className="headerComp">
            <nav class="navbar navbar-expand-lg navbar-light pt-4 pb-3">
                <div class="container">
                    <Link class="navbar-brand h2" to="/">
                        <img style={{ width: "150px" }} src={logo} alt="" />
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="me-auto"></div>
                        <ul class="navbar-nav mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" to="/">Home</Link>
                            </li>
                            <li class="nav-item ms-3">
                                <Link class="nav-link" to="/destination">Destination</Link>
                            </li>
                            <li class="nav-item ms-3">
                                <Link class="nav-link" to="/blog">Blog</Link>
                            </li>
                            <li class="nav-item ms-3">
                                <Link class="nav-link" to="/contact">Contact</Link>
                            </li>
                            <li class="nav-item ms-4">
                                {
                                    user ?
                                        <h4>{user?.name}</h4>
                                        :
                                        <Link class="btn color-bg text-light px-4" to="/login">Login</Link>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container">
                <hr />
            </div>
        </div>
    );
};

export default Header;