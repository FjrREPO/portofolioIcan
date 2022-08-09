const express = require("express")
const {
    getProducts,
    getProductById,
    saveProduct,
    updateProduct,
    deleteProduct
} = require("../controllers/ProductController.js")

const router = express.Router();

router.get('/admin/', getProducts);
router.get('/admin/:id', getProductById);
router.post('/admin/', saveProduct);
router.patch('/admin/:id', updateProduct);
router.delete('/admin/:id', deleteProduct);

module.exports = router