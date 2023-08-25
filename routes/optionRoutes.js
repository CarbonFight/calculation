const express = require("express");
const router = express.Router();
const getAllOption = require("../functions/option");
const errorGestion = require("../utils/errorGestion");

router.get('/', async (req, res) => {
    try {
        const { category, action } = req.query;

        if (!category && !action) {
          return res.status(400).json({ message: "category and action are missing." });
        } else if (!category) {
          return res.status(400).json({ message: "category is missing." });
        } else if (!action) {
          return res.status(400).json({ message: "action is missing." });
        }
        const actions = await getAllOption(category, action);
        res.json(actions);
    
      } catch (error) {
        errorGestion(error, res);
      }
});

module.exports = router;
