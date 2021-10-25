import { Navbar } from "react-bootstrap"
import './NavBar.css';

const NavBar = () => {
  return (
    <Navbar className="navBar">
      <div class="container-fluid">
        <div id="div-h1"class="h1">
          <h1>Upgrade Center</h1>
        </div>  
        <div id="div-navButtons"class="navButtons">
          <button id="button" type="button" class="btn btn-primary">Inicio</button>
          <button id="button" type="button" class="btn btn-primary">Catálogo</button>
          <button id="button" type="button" class="btn btn-primary">Login</button>
        </div>
      </div>
    </Navbar>
  )
}

export default NavBar
