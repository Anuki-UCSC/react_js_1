import React from 'react';

function NamelistDynamic2(props)
{
    return(
      
      <div className="list-group-item">
        <div className="row align-items-center shadow-sm">
          <div className="col-2">
            <p><img src={props.avatar} alt={props.name} className="border border-dark rounded-circle"/> </p>
          </div>
          <div className="col-8">
            <p>{props.name} </p>
            <p>{props.city}  |  {props.email}</p>
            {/* <p>{moment(props.birthday).format('DD-MM-YYYY')}</p> */}
            {/* <p>birthday : {new Intl.DateTimeFormat('en-GB').format(new Date(props.birthday))}</p> */}
         </div>
        </div>
      </div>
        

    );
}

export default NamelistDynamic2;