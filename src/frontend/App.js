import React from 'react';
import './App.css'
import Home from './views/Home'
import Play from './components/Play'
import NotFound from './components/NotFound'
import Details from './components/Details'
import { BrowserRouter, Route, Switch } from 'react-router-dom';



export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/NotFound' component={NotFound} />
        <Route exact path='/:id' component={Details} />
        <Route exact path='/Play' component={Play} />
      </Switch>
    </BrowserRouter>
  );
};




