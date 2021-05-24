import React from 'react';

function NamelistDynamic(props)
{
    return(
        <li>{props.name} - {props.degree} - {props.year} </li>

    );
}

export default NamelistDynamic;