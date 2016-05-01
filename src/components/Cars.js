import React from 'react';

const Car = ({id, brand, model, previewImgUrl, isFavourite, setFavourite}) =>
    <li key={id} className={"car " + (isFavourite ? "favourite" : "")}>
        <img src={previewImgUrl}/>
        <div>
            <span className="brand">{brand}</span>
            <span className="model"> {model}</span>
        </div>
        {isFavourite
            ? null
            : <a className="addToFavourite" onClick={setFavourite}> add to favourite</a>}
    </li>;

export default ({cars}) => <ul className="carList">
    {cars.map(car =>
        <Car
            {...car.attributes}
            setFavourite={()=> {car.set({isFavourite: true})}}
        />)}
</ul>