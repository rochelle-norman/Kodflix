import React from 'react';
import './App.css'
import Home from '../src/views/Home'
import Play from './components/Play'
import NotFound from './components/NotFound'
import { Switch, Route, BrowserRouter } from 'react-router-dom';



function App() {
  return (
<div>
<BrowserRouter>
  <Switch>
  <Route exact path='/' component={Home} exact = {true} />
  <Route path='/NotFound' component={NotFound} />
  <Route path='/Play' component={Play} />
</Switch>
</BrowserRouter>
</div>
  );
}

export default App;


