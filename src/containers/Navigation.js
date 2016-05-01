import React from 'react';
import router, {pages} from '../router';

export default () => <nav>
    <a onClick={() => router.navigate(pages.cars, {trigger: true})}>Cars</a>
    <a onClick={() => router.navigate(pages.favourite, {trigger: true})}>Favourite</a>
    <a onClick={() => router.navigate(pages.statistics, {trigger: true})}>Statistic</a>
</nav>