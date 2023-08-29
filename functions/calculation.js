const getData = require("./utils/dataAcces");

/**
 * Calculate CO2e emissions based on category, action, option, count, and side.
 *
 * @param {string} category - The category of the calculation.
 * @param {string} action - The action related to the calculation.
 * @param {string|null} option - The option for the calculation (can be null).
 * @param {number} count - The count of the calculation.
 * @param {string[]} side - An array of side options for the calculation.
 * @returns {[number, string]} An array containing the calculated CO2e emissions and the default option.
 * @throws {Error} If no calculation is found for the given parameters.
 */
async function calculation(category, action, option, count, side) {
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
      let hint;

      if (results.length > 0) {
        co2e = results[0].co2e;
        defaultOption = results[0].option;
        hint = results[0].hint;
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
        return [Math.round(result), defaultOption, hint];
      } else {
        return [co2e, defaultOption, hint];
      }
      
    } catch (error) {
      throw error; 
    }
  }


module.exports = calculation;
