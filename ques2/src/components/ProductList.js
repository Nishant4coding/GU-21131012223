import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../services/api.js';

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function getProducts() {
            const data = await fetchProducts('AMZ', 'Laptop', 10, 1, 10000);
            setProducts(data);
        }

        getProducts();
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product, index) => (
                <div key={index} className="p-4 border rounded-lg">
                    <h2 className="text-lg font-bold">{product.productName}</h2>
                    <p>Price: {product.price}</p>
                    <p>Rating: {product.rating}</p>
                    <p>Discount: {product.discount}</p>
                    <p>Availability: {product.availability}</p>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
