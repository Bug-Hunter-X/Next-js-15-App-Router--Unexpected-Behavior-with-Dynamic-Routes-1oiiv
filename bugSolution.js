```javascript
// pages/product/[id].js

import { notFound } from 'next/navigation';

export default function Product({ params }) {
  const productId = params.id;

  // Fetch product data (replace with your data fetching logic)
  const product = getProductData(productId);

  if (!product) {
    notFound();
  }

  return (
    <div>
      <h1>Product {productId}</h1>
      {/* Display product details */}
    </div>
  );
}

// Function to fetch data (replace with your actual data fetching function)
function getProductData(id) {
  // ...your data fetching logic here...
  // Example:
  const products = {
    '1': { name: 'Product 1', price: 10 },
    '2': { name: 'Product 2', price: 20 },
  };
  return products[id] || null; 
}
```