//RESTAPI
const express = require('express');
const router = express.Router();
const Product = require('../models/product');

//get all products(READ)
router.get('/', async (req, res) => {
    try {
        const product = await Product.find();
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: err.message });
    }
});

//get product by id (READ)
router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findOne({ id: req.params.id});
        
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
//create product
router.post('/', async (req, res) => {
    const { name, id, description, price, category, instock } = req.body;

    try {
        const product = new Product({ name, id, description, price, category, instock });
        const save = await product.save();
        res.status(201).json(save);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//update product
router.put('/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(product);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//delete product
router.delete('/:id', async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.json({ message: 'Product deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
