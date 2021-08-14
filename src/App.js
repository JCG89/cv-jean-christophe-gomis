import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Accueil from './pages/Accueil';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Competences from './pages/Competences';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
           <Route path ="/" exact component = { Accueil } />
           <Route path ="/contact" component = { Contact } />
           <Route path = "/competences"component = {Competences} />
           <Route path ="/portfolio" component = { Portfolio } />
           <Route component = { NotFound } />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;