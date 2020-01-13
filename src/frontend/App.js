import React from 'react';
import './App.css'
import Home from './views/Home'
import Play from './components/Play'
import NotFound from './components/NotFound'
import { Switch, Route, BrowserRouter } from 'react-router-dom';



export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/NotFound' component={NotFound} />
          <Route exact path='/Play' component={Play} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};




