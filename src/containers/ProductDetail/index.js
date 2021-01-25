import React, { Component } from 'react';
import Detail from './components/Detail';
import ProductOverview from './components/ProductOverview';
import ShopInfo from './components/ShopInfo';

class ProductDetail extends Component {
    render() {
        return (
            <div>
                <ProductOverview />
                <ShopInfo />
                <Detail />
            </div>
        );
    }
}

export default ProductDetail;