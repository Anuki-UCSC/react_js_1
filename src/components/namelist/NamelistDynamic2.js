import React from 'react';

function NamelistDynamic2(props)
{
    return(
      <div className="list-group-item">
        <div className="row align-items-center shadow-sm">
          <div className="col-2">
            <p><img src={props.profile_pic} alt={props.fullname} className="border border-dark rounded-circle"/> </p>
          </div>
          <div className="col-8">
            <p>Name : {props.fullname} </p>
            <p>Address : {props.location}</p>
            <p>contact :{props.email}  | {props.tell} </p>
            {/* <p>birthday : {new Intl.DateTimeFormat('en-GB').format(new Date(props.birthday))}</p> */}
         </div>
        </div>
      </div>
        

    );
}

export default NamelistDynamic2;