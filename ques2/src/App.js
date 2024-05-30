import React from 'react';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import FilterBar from './components/FilterBar';

function App() {
    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold my-4">Top Products</h1>
            <FilterBar />
            <ProductList />
            <ProductDetails />
        </div>
    );
}

export default App;
