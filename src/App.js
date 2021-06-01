import React from 'react';
import './App.css';

import NameList1 from './components/pages/namelist/NameList1';
import NameList2 from './components/pages/namelist/NameList2';
import Name_List from './components/pages/namelist/Name_List';
import HeaderBar from './components/HeaderBar/HeaderBar';
import About from './components/pages/About';
import Home from './components/pages/Home';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import NameListC from './components/pages/namelistC/NameListC';

function App() {
  return (
    <div>
      <BrowserRouter>
      <HeaderBar/>
      <Switch>

        <Route path="/about">
        <About/>
        </Route> 

        <Route path="/namelist">
        <Name_List/>
        </Route> 

        <Route path="/namelistC">
        <NameListC />
        </Route> 

        <Route path="/">
        <Home />
        </Route> 
            
            
            
      </Switch>
      </BrowserRouter>

      
     
     </div>
  );
}

export default App;
