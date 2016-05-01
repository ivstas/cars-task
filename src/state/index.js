import CarCollection from '../collections/CarCollection';
import BrandCollection from '../collections/BrandCollection';
import Brand from '../models/Brand';

export const cars = new CarCollection([
    {id: '38b412be-690a-44a1-a6bd-254d6a5d9d1a', make: 'volvo', model: 'cx30'},
    {id: 'c0b0f893-7222-42a2-8100-cdf396713611', make: 'volvo', model: 'cx90'},
    {id: 'eef0bca6-a371-43a3-881c-e24b2a3797aa', make: 'bmw', model: '325i'},
    {id: 'a788389a-b09a-4abb-9920-c3e8571bc7ec', make: 'lada', model: 'calina'}
]);
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
