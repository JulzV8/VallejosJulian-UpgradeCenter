import './App.css';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer.jsx';
import NavBar from './components/NavBar/NavBar';

function App() {
  let titulo="Hola soy ItemListContainer.jsx";
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Upgrade Center</h1>
        </div>
        <NavBar/>
      </header>
      <body>
        <ItemListContainer titulo={titulo}/>
      </body>
    </div>
  );
}

export default App;
