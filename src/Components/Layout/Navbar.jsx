import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Navbar</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/about'>About us</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </NavLink>
                            <ul className="dropdown-menu">
                                <li><NavLink className="dropdown-item" to="/counter">Counter</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/product">Product List</NavLink></li>

                            </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " to='/service' aria-disabled="true"  >Service</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? "red nav-link" : "blue nav-link"} to='/contact'>Contact</NavLink>

                            <NavLink to="/contact" style={({ isActive }) => ({
                                color: isActive ? "red" : "black",
                            })}  >
                                hyyy
                            </NavLink>
                        </li>
                    </ul>

                    <button style={{ background: "" }} className="btn btn-outline-success" type="submit">Submit</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar