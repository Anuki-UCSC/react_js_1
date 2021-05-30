import React from 'react';

// import NameListItem from './NameListItem';
import NamelistDynamic from './NamelistDynamic';

function NameList1()
{
    
    return(
        <div>
    <ul>

        <NamelistDynamic name="ishan reshmika" degree="computer science" year="3rd year"/>
        <NamelistDynamic name="Anuki Gayara " degree="software engineering" year="3rd year"/>
        <NamelistDynamic name="Sanduni Lanka" degree="software engineering" year="3rd year"/>
        <NamelistDynamic name="chamodhi dewwandi" degree="computer science" year="3rd year"/>
        <NamelistDynamic name="shamali pathirana" degree="computer science" year="3rd year"/>
      </ul>
        
        </div>
    );
}


export default NameList1;
