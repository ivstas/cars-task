import CarCollection from '../collections/CarCollection';
import BrandCollection from '../collections/BrandCollection';

import testData from './testdata.json'

export const cars = new CarCollection(testData.cars.map(car => Object.assign({}, car, {isFavourite: false})));

setTimeout(() => { cars.get('0cd6de21-f6fa-49a9-8616-7a896004eac2').set({isFavourite: true})}, 1000);

// todo: get brand data from cars collection
export const brands = new BrandCollection([
    {title: 'volvo'},
    {title: 'bmw'},
    {title: 'lada'}
]);

export default {
    cars,
    brands
}
