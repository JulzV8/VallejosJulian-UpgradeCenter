import { Navbar } from "react-bootstrap"
import CartWidget from "./CartWidget";
import { Link,NavLink } from 'react-router-dom';

import './NavBar.css';

const NavBar = () => {
  return (
    <Navbar className="navbar justify-content-between">
      <NavLink className="text-decoration-none text-light"exact to="/">
        <h1 className="display-4 mx-4">
          Upgrade Center
        </h1>
                </NavLink>
            <ul className="navbar-nav">
              <li id="navButton" className="nav-item">
                <NavLink exact to="/" activeClassName="btn btn-warning btn-outline-dark btn-sm m-1 font-weight-bold"  type="button" className="btn btn-outline-light btn-sm m-1">
                  Inicio
                </NavLink>
              </li>
              <li id="navButton" className="nav-item">
                <NavLink to="/categoria/gabinete" activeClassName="btn btn-warning btn-outline-dark btn-sm m-1 font-weight-bold"  type="button" className="btn btn-outline-light btn-sm m-1">
                  Gabinetes
                </NavLink>
              </li>
              <li id="navButton" className="nav-item">
                <NavLink to="/categoria/cpu" activeClassName="btn btn-warning btn-outline-dark btn-sm m-1 font-weight-bold"  type="button" className="btn btn-outline-light btn-sm m-1">
                  CPU
                </NavLink>
              </li>
              <li id="navButton" className="nav-item">
                <NavLink to="/categoria/gpu" activeClassName="btn btn-warning btn-outline-dark btn-sm m-1 font-weight-bold"  type="button" className="btn btn-outline-light btn-sm m-1">
                  GPU
                </NavLink>
              </li>
              <li className="nav-item">
                <Link to="/cart">
                    <CartWidget/>
                </Link>
              </li>
            </ul>
    </Navbar>
  )
}

export default NavBar
