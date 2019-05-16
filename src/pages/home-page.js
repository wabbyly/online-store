import React from 'react';
import ProductListing from '../features/products-listing';
import data from '../data/products.json';


export default function HomePage(props) {
    return(
        <div>
            <h2>Home Page</h2>
            <ProductListing products={data.products}></ProductListing>
        </div>
    );
}