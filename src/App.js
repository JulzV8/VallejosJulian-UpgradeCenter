import './App.css';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer.jsx';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import {ItemDetailContainer} from './components/ItemListContainer/ItemDetailContainer.jsx';

import NavBar from './components/NavBar/NavBar';
function App() {

  return (
    <div className="App bg-light">
      <BrowserRouter>
        <header className="App-header">
          <NavBar/>
        </header>
        <Switch>
          <Route exact path="/">
            <ItemListContainer/>
          </Route>
          <Route exact path="/categoria/:categoryID">
            <ItemListContainer/>
          </Route>
          <Route exact path="/detail/:id" component={ItemDetailContainer}/>
        </Switch>
      </BrowserRouter>
    </div>

  );
}

export default App;
