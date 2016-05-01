import CarCollection from '../collections/CarCollection';
import FavouriteCarCollection from '../collections/FavouriteCarCollection';
import BrandCollection from '../collections/BrandCollection';
import _ from 'underscore'

import testData from './testdata.json'

export const cars = new CarCollection(testData.cars);
export const favouriteCars = new FavouriteCarCollection();

const getBrandsFromCars = (cars) => {
    let brandsTitles = _.uniq(cars.map(car => car.get('brand')));
    return brandsTitles.map(title => ({title}));
};

// todo: listen to favourite cars
cars.on('change:brand add remove', () => {
    brands.reset(getBrandsFromCars(cars));
});

export const brands = new BrandCollection(getBrandsFromCars(cars));

export default {
    cars,
    brands
}
