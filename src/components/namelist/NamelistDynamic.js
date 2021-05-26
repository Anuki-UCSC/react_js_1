import React from 'react';

function NamelistDynamic(props)
{
    return(
        <li className="list-group-item">
            <div className="row align-item-center">
            {props.name} - {props.degree} - {props.year} 
            </div>
        </li>
    );
}

export default NamelistDynamic;