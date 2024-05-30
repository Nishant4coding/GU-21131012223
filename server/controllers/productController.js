// controllers/productController.js
const axios = require('axios');

const companies = ["AMZ", "FLP", "SNP", "MYN", "AZO"];

const generateUniqueId = (product) => {
  return `${product.productName}-${product.price}-${product.rating}`;
};

const getTopProducts = async (req, res) => {
  const { categoryname } = req.params;
  const { top = 10, minPrice = 0, maxPrice = 100000, sort = 'price', order = 'asc', page = 1 } = req.query;

  try {
    let products = [];

    for (const company of companies) {
      const response = await axios.get(`http://20.244.56.144/test/companies/${company}/categories/${categoryname}/products`, {
        params: { top, minPrice, maxPrice }
      });
      const data = response.data.map(product => ({ ...product, id: generateUniqueId(product), company }));
      products = products.concat(data);
    }

    products = products.sort((a, b) => {
      if (order === 'asc') {
        return a[sort] > b[sort] ? 1 : -1;
      } else {
        return a[sort] < b[sort] ? 1 : -1;
      }
    });

    const paginatedProducts = products.slice((page - 1) * top, page * top);

    res.json(paginatedProducts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProductDetails = async (req, res) => {
  const { categoryname, productid } = req.params;

  try {
    for (const company of companies) {
      const response = await axios.get(`http://20.244.56.144/test/companies/${company}/categories/${categoryname}/products`);
      const product = response.data.find(product => generateUniqueId(product) === productid);
      if (product) {
        return res.json({ ...product, id: productid, company });
      }
    }
    res.status(404).json({ message: 'Product not found' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getTopProducts, getProductDetails };
