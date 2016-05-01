import React from 'react';

export default ({cars}) => <ul>{cars.map(car => {
        let {model, make, id, isFavourite} = car.attributes;
        return <li key={id}>
            <a>{model} by {make}</a>
            {isFavourite ? <span>fav</span> : <a onClick={()=> {car.set({isFavourite: true})}}> mark favourite</a>}
        </li>
    }
)}</ul>