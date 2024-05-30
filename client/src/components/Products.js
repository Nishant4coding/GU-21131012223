import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('Laptop');
  const [n, setN] = useState(10);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState('price');
  const [order, setOrder] = useState('asc');

  useEffect(() => {
    fetchProducts();
  }, [category, n, page, sort, order]);

  const fetchProducts = async () => {
    try {
        const authToken = 'eyJhbGcioiJIUzI1NiIsInR5CCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzEwODM1MjY4LCJpYXQiOjE3MTA4M YiI6InJhaHVsQGFiYy51ZHUifSwiY29tcGFueU5hbWUiOiJnb@1hcnQiLCJjbGllbnRJRCI6IjM3Ym100TNjLTczZDMtNDd 1YS04Njc1LTIxZjY2ZWY5YjczNSIsImNsaWVudFNlY3JldCI6IkhWSVFCVmJXbVRHRW1hRUQiLCJvd251ck5hbWUiOiJSYW h1bCIsIm93bmVyRW1haWwiiJyYWh1bEBhYmMuZWRlIiwicm9sbE5vIjoiMSJ9.gmk2F736Z7q7EaIGDShc40DKK1zwQ9Up zQ5NjgsImlzcyI6IkFmZm9yZG11ZCIsImpaSI6IjM3Ym100TNjLTcz ZDMtNDdlYS04Njc1LTIxZjY2ZWY5YjczNSIsInN1 3xQ-4Dbsu8A';
      const response = await axios.get(`http://localhost:5000/categories/${category}/products`, {
        params: {
          top: n,
          page,
          sort,
          order,
        },
        headers: {
            Authorization: `Bearer ${authToken}`
          }
      });
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Top Products</h1>
      <div className="flex justify-between mb-4">
        <div>
          <label className="mr-2">Category:</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="p-2 border rounded">
            <option value="Laptop">Laptop</option>
            <option value="Phone">Phone</option>
            {/* Add other categories as needed */}
          </select>
        </div>
        <div>
          <label className="mr-2">Number of Products:</label>
          <input
            type="number"
            value={n}
            onChange={(e) => setN(parseInt(e.target.value))}
            className="p-2 border rounded"
          />
        </div>
        <div>
          <label className="mr-2">Sort by:</label>
          <select value={sort} onChange={(e) => setSort(e.target.value)} className="p-2 border rounded">
            <option value="price">Price</option>
            <option value="rating">Rating</option>
            {/* Add other sorting options as needed */}
          </select>
        </div>
        <div>
          <label className="mr-2">Order:</label>
          <select value={order} onChange={(e) => setOrder(e.target.value)} className="p-2 border rounded">
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded">
            <h2 className="text-xl font-bold">{product.productName}</h2>
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating}</p>
            <p>Discount: {product.discount}%</p>
            <p>Availability: {product.availability}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <button onClick={() => setPage(page - 1)} disabled={page === 1} className="p-2 border rounded">
          Previous
        </button>
        <button onClick={() => setPage(page + 1)} className="p-2 border rounded">
          Next
        </button>
      </div>
    </div>
  );
};

export default Products;
