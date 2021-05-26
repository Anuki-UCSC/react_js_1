import React, {useState} from 'react';

import NameListItem from './NameListItem';
import NamelistDynamic2 from './NamelistDynamic2';

const[namelist, setNameList]=useState([{
    "name": 
        {"title": "mr","first": "sherlock","last": "holmes"},
    "location": 
        {"city": "trinko","postcode": "93027",},
    "email"
        : "brad.gibson@example.com",
    "dob": 
        {"date": "1993-07-20T09:44:18.674Z","age": 26},
    "phone":
        "011-962-7516",  
    "picture": 
        {"medium": "https://randomuser.me/api/portraits/med/men/75.jpg",  },
},
{
    "name": 
        {"title": "mr","first": "crab","last": "willston"},
    "location": 
        {"city": "colombo","postcode": "93027",},
    "email"
        : "brad.crab@example.com",
    "dob": 
        {"date": "1993-07-20T09:44:18.674Z","age": 26},
    "phone":
        "011-962-7516",  
    "picture": 
        {"medium": "https://randomuser.me/api/portraits/med/men/75.jpg",  },
},
{
    "name": 
        {"title": "mr","first": "Hewan","last": "Seo ho"},
    "location": 
        {"city": "mathara","postcode": "93027",},
    "email"
        : "brad.gibson@example.com",
    "dob": 
        {"date": "1944-07-20T09:44:18.674Z","age": 26},
    "phone":
        "011-333-3333",  
    "picture": 
        {"medium": "https://randomuser.me/api/portraits/med/men/75.jpg", },
}
]);

function NameList2_2()
{
    

const namelistComponent=()=>{
    return namelist.map((aName)=>{
        return(
            <NamelistDynamic2 
                fullname={`${aName.name.title}. ${aName.name.first} ${aName.name.last}`}
                location={aName.location.city}
                email={aName.email}
                tell = {aName.phone}
                profile_pic ={aName.picture.medium}
                birthday={aName.dob.date}
            />
        );
    });

};

    return(
        <div>
        <div className="container-fluid mb-8">
            <ul>
            {namelistComponent()}
            
            </ul>
        </div>
        </div>
    );
}


export default NameList2_2;