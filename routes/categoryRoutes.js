const express = require('express');
const router = express.Router();
const getAllCategory = require('../functions/category');
const errorGestion = require('../utils/errorGestion');

router.get('/', async (req, res) => {
    try {
        const categories = await getAllCategory();
        res.json(categories);
      } catch (error) {
        errorGestion(error, res);
      }
});

module.exports = router;