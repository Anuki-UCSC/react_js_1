import React from 'react';
import './App.css';

import NameList1 from './components/namelist/NameList1';
import NameList2 from './components/namelist/NameList2';
// import NameList2_2 from './components/namelist/NameList2_2';
import NameList3 from './components/namelist/Name_List';
import HeaderBar from './components/HeaderBar/HeaderBar';

function App() {
  return (
    <div>
      <HeaderBar/>
      <h1>name list</h1>
      <hr />
      
      <NameList1/>
      <NameList2/>
      <hr />
      
      <Name_List/>
     
     
     </div>
  );
}

export default App;
