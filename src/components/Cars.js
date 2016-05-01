import React from 'react';

const Car = ({brand, model, previewImgUrl, isFavourite, changeFavourite}) =>
    <li className={"car " + (isFavourite ? "favourite" : "")}>
        <img src={previewImgUrl}/>
        <div>
            <span className="brand">{brand}</span>
            <span className="model"> {model}</span>
        </div>
        {changeFavourite}
    </li>;


export default ({cars, favouriteCars, changeFavourite}) => <ul className="carList">
    {cars.map(car =>
        <Car key={car.get('id')}
             {...car.attributes}
             isFavourite={favouriteCars.contains(car)}
             changeFavourite={changeFavourite(car)}
        />)}
</ul>