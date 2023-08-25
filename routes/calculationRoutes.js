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
          return res.status(400).json({ 
            message: !category ? "category is missing." :
                     !action ? "action is missing." : 
                     !option ? "option is missing." : 
                     !count ? "count is missing." : 
                     "side is missing."
          });
        }
      } else {
        if (!category || !action || !option) {
          return res.status(400).json({ 
            message: !category ? "category is missing." :
                     !action ? "action is missing." :
                     "option required in food category."
          });
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
