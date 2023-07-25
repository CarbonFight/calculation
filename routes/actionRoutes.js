const express = require('express');
const router = express.Router();
const getAllAction = require('../functions/action');
const errorGestion = require('../utils/errorGestion');

router.get('/', async (req, res) => {
    try {
        const { category } = req.query;
    
        if (!category) {
          return res.status(400).json({ message: 'category is missing.' });
        }
        const actions = await getAllAction(category);
        res.json(actions);
      } catch (error) {
        errorGestion(error);
      }
});

module.exports = router;