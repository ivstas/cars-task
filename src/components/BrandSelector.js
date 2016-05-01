import React from 'react';

export default ({brands, onBrandSelect, selectedBrandTitle}) => <ul>
    {brands.map(brand => {
            let brandTitle = brand.get("title");
            let isSelected = brandTitle === selectedBrandTitle;
            return <li key={brandTitle}
                       style={isSelected ? {"color": "blue"} : null}
                       onClick={() => onBrandSelect(brandTitle)}>
                {brandTitle}
            </li>
        }
    )}

</ul>