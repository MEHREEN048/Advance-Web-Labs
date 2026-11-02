
import React, { useState, useEffect } from 'react';
import { request, gql } from 'graphql-request';
import './App.css';

const endpoint = 'http://localhost:5000/graphql';

// GraphQL Query
const GET_PRODUCTS = gql`
  query {
    products {
      id
      name
      price
    }
  }
`;

// GraphQL Mutation
const ADD_PRODUCT = gql`
  mutation AddProduct($name: String!, $price: Float!) {
    addProduct(name: $name, price: $price) {
      id
      name
      price
    }
  }
`;

function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [error, setError] = useState('');

  // Fetch products
  const fetchProducts = async () => {
    try {
      const data = await request(endpoint, GET_PRODUCTS);
      setProducts(data.products);
      setError('');
    } catch (err) {
      setError('Unable to fetch products. Check backend.');
    }
  };

  // Load products on page opening
  useEffect(() => {
    fetchProducts();
  }, []);

  // Add product
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || price === '') {
      setError('Please enter product name and price.');
      return;
    }

    const productPrice = Number(price);

    if (!Number.isFinite(productPrice) || productPrice < 0) {
      setError('Please enter a valid price.');
      return;
    }

    try {
      await request(endpoint, ADD_PRODUCT, {
        name: name.trim(),
        price: productPrice
      });

      setName('');
      setPrice('');
      setError('');

      await fetchProducts();

    } catch (err) {
      setError('Unable to add product.');
    }
  };

  return (
    <div className="container">

      <h1>GraphQL Product Management</h1>

      <h2>Add New Product</h2>

      <form className="product-form" onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Enter Product Price"
          value={price}
          min="0"
          step="any"
          onChange={(e) => setPrice(e.target.value)}
        />

        <button type="submit" className="add-btn">
          Add Product
        </button>

      </form>

      {error && <p className="error">{error}</p>}

      <hr />

      <h2>Product List</h2>

      {products.length === 0 ? (
        <p className="empty-message">No products available.</p>
      ) : (
        <ul className="product-list">

          {products.map((product) => (
            <li key={product.id} className="product-item">

              <span className="product-name">
                {product.name}
              </span>

              <span className="product-price">
                Rs. {product.price}
              </span>

            </li>
          ))}

        </ul>
      )}

    </div>
  );
}

export default App;
