import React, { Component } from 'react';
import Chart from '../components/Highchart';
import { favouriteCars } from '../state/data';

const options = {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Cars in favourite by brand'
    },
    xAxis: {
        categories: [
            'cars in favourite'
        ]
    },
    yAxis: {
        min: 0
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    }
};

const calculateBrandCount = (cars) => {
    return cars.reduce((acc, car) => {
        let brand = car.get('brand');
        acc[brand] = (acc[brand] || 0) + 1;
        return acc;
    }, []);
};
class Statistics extends Component {
    constructor(props) {
        super(props);
        this.state = { favCarCountByBrand: calculateBrandCount(favouriteCars)};
        this.updateCars = () => this.setState({
            favCarCountByBrand: calculateBrandCount(favouriteCars)
        });
        favouriteCars.on('all', this.updateCars);
    }
    componentWillUnmount() {
        favouriteCars.off('all', this.updateCars);
    }
    render() {
        let series = [];

        let favCarCountByBrand = this.state.favCarCountByBrand;
        for (let brand in favCarCountByBrand) {
            if (favCarCountByBrand.hasOwnProperty(brand)) {
                let count = favCarCountByBrand[brand];
                series.push({name: brand, data: [count]})
            }
        }

        return React.createElement(Chart, {
            container: 'statisticsChart', options: Object.assign({}, options, {series})}
        )
    }
}


export default Statistics;