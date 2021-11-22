import './App.css';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer.jsx';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import {ItemDetailContainer} from './components/ItemListContainer/ItemDetailContainer.jsx';
import CartContainer from './components/ItemListContainer/CartContainer'


import NavBar from './components/NavBar/NavBar';
import CartContextProvider  from './context/CartContext';
function App() {

  return (
    <CartContextProvider>
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
            <Route exact path="/cart/" component={CartContainer}/>

          </Switch>
        </BrowserRouter>
      </div>
    </CartContextProvider>

  );
}

export default App;
