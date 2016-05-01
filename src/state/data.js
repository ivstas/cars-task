import CarCollection from '../collections/CarCollection';
import BrandCollection from '../collections/BrandCollection';
import _ from 'underscore'

import testData from './testdata.json'

export const cars = new CarCollection(testData.cars.map(car => Object.assign({}, car, {isFavourite: false})));

const getBrandsFromCars = (cars) => {
    let brandsTitles = _.uniq(cars.map(car => car.get('brand')));
    return brandsTitles.map(title => ({title}));
};

cars.on('change:brand add remove', () => {
    brands.reset(getBrandsFromCars(cars));
});

export const brands = new BrandCollection(getBrandsFromCars(cars));

export default {
    cars,
    brands
}
