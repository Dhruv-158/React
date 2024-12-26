/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react'
import { Link } from 'react-router-dom'


function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand h6 m-3" to="/">
                    {props.title}
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className=" text-black text-decoration-none m-3" aria-current="page" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="text-black text-decoration-none m-3 " to="/About">
                                About
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link
                                className="nav-to dropdown-toggle text-black text-decoration-none m-3"
                                to="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Dropdown
                            </Link>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link className="dropdown-item m-3" to="#">
                                        Action
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item m-3" to="#">
                                        Another action
                                    </Link>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <Link className="dropdown-item m-3" to="#">
                                        Something else here
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-to disabled text-black text-decoration-none m-3" aria-disabled="true">
                                Disabled
                            </Link>
                        </li>
                    </ul>
                    {props.Searchbar ? <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> : " "}
                </div>
            </div>
        </nav>
    )
}

// Navbar.defaultProps = {
//     title : "Yes Todo",
//     Searchbar :  true,
// }

// Navbar.prototype = {
//     title: propTypes.string,
//     Searchbar : propTypes.bool
// }

export default Navbar