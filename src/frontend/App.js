import React from 'react';
import './App.css'
import Home from './views/Home'
import Play from './components/Play'
import NotFound from './components/NotFound'
import Details from './components/Details'
import Gallery from './components/Gallery'
import { BrowserRouter, Route, Switch } from 'react-router-dom';




export default function App() {
  return (
   
    <BrowserRouter>
      <Switch>
      <Route exact path='/NotFound' component={NotFound} />
        <Route exact path='/' component={Gallery} />
        <Route exact path='/:id' component={Details} />
        <Route exact path='/Play' component={Play} />
        
      </Switch>
    </BrowserRouter>
  );
};




