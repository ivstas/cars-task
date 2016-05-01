import CarCollection from '../collections/CarCollection';
import BrandCollection from '../collections/BrandCollection';
import Brand from '../models/Brand';

import testData from './testdata.json'

export const cars = new CarCollection(testData.cars);
let carToAddLater = {id: '15a5e8ba-7368-4493-8327-9aa87a5ea84d', make: 'bmv', model: 'x3'};

setTimeout(() => { cars.get('38b412be-690a-44a1-a6bd-254d6a5d9d1a').set({model: 'cx40'})}, 1000);
setTimeout(() => { cars.add(carToAddLater)}, 2000);


export const brands = new BrandCollection([
    {title: 'volvo'},
    {title: 'bmw'},
    {title: 'lada'}
]);

export const selectedBrand = new Brand();

export default {
    cars,
    brands,
    selectedMake: selectedBrand
}
