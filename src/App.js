import './App.css';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer.jsx';
// import {ItemDetailContainer} from './components/ItemListContainer/ItemDetailContainer.jsx';

import NavBar from './components/NavBar/NavBar';
function App() {
  let titulo="Hola soy ItemListContainer.jsx";

  return (
    <div className="App bg-light">
      <header className="App-header">
        <div>
          <h1 className="display-4 mx-4">Upgrade Center</h1>
        </div>
        <NavBar/>
      </header>
      <div>
        <ItemListContainer titulo={titulo}/>
      </div>
    </div>
  );
}

export default App;
