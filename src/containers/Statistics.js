import React from 'react';
import Chart from '../components/Highchart';

export default () => React.createElement(Chart, {container: 'statisticsChart', options})

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
    },
    series: [{
        name: 'Audi',
        data: [1]

    }, {
        name: 'Volvo',
        data: [2]

    }, {
        name: 'Ford',
        data: [1]

    }]
};