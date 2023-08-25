const express = require("express");
const router = express.Router();
const calculation = require("../functions/calculation");
const calculationFood = require("../functions/calculationFood");
const errorGestion = require("../utils/errorGestion");

router.get('/', async (req, res) => {
  
    const { category, action, option, count , side} = req.query;

    if (category === "food") {
      if (action === "main") {
        if (!category || !action || !option || !count || !side) {
          let errorMessage;
          if (!category) {
            errorMessage = "category is missing.";
          } else if (!action) {
            errorMessage = "action is missing.";
          } else if (!option) {
            errorMessage = "option is missing.";
          } else if (!count) {
            errorMessage = "count is missing.";
          } else {
            errorMessage = "side is missing.";
          }
          return res.status(400).json({ message: errorMessage });         
        }
      } else {
        if (!category || !action || !option) {
          let errorMessages;
          if (!category) {
            errorMessages = "category is missing.";
          } else if (!action) {
            errorMessages = "action is missing.";
          } else if (category === "food" && !option) {
            errorMessages = "option required in food category.";
          }
          return res.status(400).json({ message: errorMessages });
        }
      }

    } else {
      if (!category || !action) {
        return res.status(400).json({ 
          message: !category ? "category is missing." : "action is missing."
        });
      }
    }
  
    try {
      let result;
      if (category !== "food") {
        result = await calculation(category, action, option, count, side); 
      } else {
        result = await calculationFood(category, action, option, count, side); 
      }
  
      const response = {
          category: category,
          action: action,
          option: result[1],
          co2e: result[0],
      };
  
      if (count) {
          response.count = parseInt(count, 10);
      }

      if (category === "food" && action === "main" && side) {
        response.side = JSON.parse(side);
      }
  
      res.json(response);
  
    } catch (error) {
      errorGestion(error, res);
    }
});

module.exports = router;
