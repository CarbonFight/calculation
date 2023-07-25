const express = require('express');
const router = express.Router();
const calculation = require('../functions/calculation');
const errorGestion = require('../utils/errorGestion');

router.get('/', async (req, res) => {
  
    const { category, action, option, count } = req.query;


    if (!category && !action) {
      return res.status(400).json({ message: 'category and action are missing.' });
    } else if (!category) {
      return res.status(400).json({ message: 'category is missing.' });
    } else if (!action) {
      return res.status(400).json({ message: 'action is missing.' });
    }
  
    try {
      const result = await calculation(category, action, option, count); 
  
      const response = {
          category: category,
          action: action,
          option: result[1],
          co2e: result[0],
      };
  
      if (count) {
          response.count = parseInt(count);
      }
  
      res.json(response);
  
    } catch (error) {
      errorGestion(error);
    }
});

module.exports = router;