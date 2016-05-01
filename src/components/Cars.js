import React from 'react';

const Car = ({id, brand, model, previewImgUrl, isFavourite, changeFavourite}) =>
    <li key={id} className={"car " + (isFavourite ? "favourite" : "")}>
        <img src={previewImgUrl}/>
        <div>
            <span className="brand">{brand}</span>
            <span className="model"> {model}</span>
        </div>
        {changeFavourite}
    </li>;


export default ({cars, changeFavourite}) => <ul className="carList">
    {cars.map(car =>
        <Car
            {...car.attributes}
            changeFavourite={changeFavourite(car)}
        />)}
</ul>