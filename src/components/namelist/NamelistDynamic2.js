import React from 'react';

function NamelistDynamic2(props)
{
    return(
      <div>
        <p><img src={props.profile_pic}></img> {props.fullname} </p>
        <p>Address : {props.location}</p>
        <p>email   : {props.email} </p>
        <p>telephone :{props.tell} </p>
        <p>birthday : {new Intl.DateTimeFormat('en-GB').format(new Date(props.birthday))}</p>
      </div>
        

    );
}

export default NamelistDynamic2;