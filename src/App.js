import React from 'react';
import './App.css';

import NameList1 from './components/namelist/NameList1';
import NameList2 from './components/namelist/NameList2';
import NameList2_2 from './components/namelist/NameList2_2';

function App() {
  return (
    <div>
     <h1>name list</h1>
      <hr />
      <NameList1/>
      <NameList2/>
      <hr />
      <NameList2_2/>
     
     
     </div>
  );
}

export default App;
