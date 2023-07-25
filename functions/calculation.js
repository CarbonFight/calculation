const getData = require('../utils/dataAcces');

async function calculation(category, action, option, count) {
    try {
      
      const jsonData = await getData();
  
      const results = jsonData.filter(item => {
        if (option && option !== "null" && typeof option !== 'undefined') {
          return item.category === category && item.action === action && item.option === option;
        } else {
          return item.category === category && item.action === action && item.default === true;
        }
      });
  
      
      let co2e = 0;
      let defaultOption = option;

      if (results.length > 0) {
        co2e = results[0].co2e;
        defaultOption = results[0].option;
      } else {
        let errorMessage = `No calculation found for category: "${category}", action: "${action}"`;
        if (option) {
          errorMessage += `, option: "${option}"`;
        }
        const error = new Error(errorMessage);
        error.status = 400;
        throw error;
      }

      if (count) {
        const result = count * co2e;
        return [Math.round(result), defaultOption];
      } else {
        return [co2e, defaultOption];
      }
      
    } catch (error) {
      throw error; 
    }
  }


module.exports = calculation;