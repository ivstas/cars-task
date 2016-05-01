import CarCollection from '../collections/CarCollection';
import BrandCollection from '../collections/BrandCollection';
import Brand from '../models/Brand';

import testData from './testdata.json'

export const cars = new CarCollection(testData.cars.map(car => Object.assign({}, car, {isFavourite: false})));

setTimeout(() => { cars.get('0cd6de21-f6fa-49a9-8616-7a896004eac2').set({isFavourite: true})}, 1000);


export const brands = new BrandCollection([
    {title: 'volvo'},
    {title: 'bmw'},
    {title: 'lada'}
]);

export const selectedBrand = new Brand();

export default {
    cars,
    brands,
    selectedBrand
}
