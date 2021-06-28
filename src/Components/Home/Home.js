import React from 'react';
import { Link } from 'react-router-dom';
import desData from '../../desData/desData';
import { useAuth } from '../Login/auth';
import logo from './../../Logo/logo_1.png';
import './Home.css'

const Home = () => {

    const { user } = useAuth()

    return (
        <div className="homeComp">
            <nav class="navbar navbar-expand-lg navbar-light py-4">
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
            <div className="container home-ticket-options">
                <div className="row">
                    {
                        desData.map(dt =>
                            <Link className="col-sm-3" to={"/search/" + dt.option}>
                                <div className="card text-dark" style={{ border: "none", borderRadius: "7px", background: "#fff" }}>
                                    <div className="card-body text-center">
                                        <img src={dt.img} alt="" className="my-4" style={{ width: "60%", margin: "0 auto" }} />
                                        <br />
                                        <h4 className="text-uppercase">{dt.title}</h4>
                                    </div>
                                </div>
                            </Link>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;