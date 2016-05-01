import React from 'react';
import router, {pages} from '../router';

export default ({favouriteCarCount}) => <nav>
    <a onClick={() => router.navigate(pages.cars, {trigger: true})}>Cars</a>
    <a onClick={() => router.navigate(pages.favourite, {trigger: true})}>
        Favourite {favouriteCarCount > 0
        ? <span className="favouriteCarCount">({favouriteCarCount})</span>
        : null }
    </a>
    <a onClick={() => router.navigate(pages.statistics, {trigger: true})}>Statistics</a>
</nav>