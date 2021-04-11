import React from 'react';
import { Redirect, NavLink, Route, Switch } from 'react-router-dom';
import TodoFeatures from './features/Todo';
import AlbumFeature from "./features/Album";
import NotFound from "./components/NotFound";
//import productApi from "./API/productApi";
// import logo from './logo.svg';
//import './App.css';


function App() {
  return (
    <div className="App">
      Header
      <p><NavLink to="/todos" activeClassName="active-menu">Todos</NavLink></p>
      <p><NavLink to="/albums" activeClassName="active">Albums</NavLink></p>

      <Switch>
        <Redirect from="/home" to="/" exact />

        <Route path="/" component={TodoFeatures} exact />
        <Route path="/todos" component={TodoFeatures} />
        <Route path="/albums" component={AlbumFeature} />

        <Route component={NotFound} />
      </Switch>
      Footer
    </div>
  );
}

export default App;
