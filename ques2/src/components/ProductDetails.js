import React from 'react';

function ProductDetails({ product }) {
    return (
        <div className="my-4">
            <h2 className="text-lg font-bold">{product.productName}</h2>
            <p>Company: {product.company}</p>
            <p>Category: {product.category}</p>
            <p>Price: {product.price}</p>
            <p>Rating: {product.rating}</p>
            <p>Discount: {product.discount}</p>
            <p>Availability: {product.availability}</p>
        </div>
    );
}

export default ProductDetails;
