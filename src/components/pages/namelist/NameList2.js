import React from 'react';

// import NameListItem from './NameListItem';
import NamelistDynamic2 from './NamelistDynamic2';

function NameList2()
{
    const namelist={
        "name": {
        "title": "mr",
        "first": "brad",
        "last": "gibson"
      },
      "location": {
        "city": "kilcoole",
        "postcode": "93027",
        },
        "email": "brad.gibson@example.com",
        "dob": {
            "date": "1993-07-20T09:44:18.674Z",
            "age": 26
          },
        "phone": "011-962-7516",  
        "picture": {
            "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",  
          },
    } ;



    return(
        <div>
    <ul>

        <NamelistDynamic2 
            fullname={`${namelist.name.title}. ${namelist.name.first} ${namelist.name.last}`}
            location={namelist.location.city}
            email={namelist.email}
            tell = {namelist.phone}
            profile_pic ={namelist.picture.medium}
            birthday={namelist.dob.date}
        />
        
      </ul>
        
        </div>
    );
}


export default NameList2;
