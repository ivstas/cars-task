import CarCollection from '../collections/CarCollection';
import BrandCollection from '../collections/BrandCollection';
import _ from 'underscore'

import testData from './testdata.json'

export const cars = new CarCollection(testData.cars.map(car => Object.assign({}, car, {isFavourite: false})));

setTimeout(() => { cars.get('0cd6de21-f6fa-49a9-8616-7a896004eac2').set({isFavourite: true})}, 1000);

const getBrandsFromCars = (cars) => {
    let brandsTitles = _.uniq(cars.map(car => car.get('brand')));
    return brandsTitles.map(title => ({title}));
};

cars.on('all', () => {
    brands.reset(getBrandsFromCars(cars));
});

export const brands = new BrandCollection(getBrandsFromCars(cars));

export default {
    cars,
    brands
}
