const getData = require("./utils/dataAcces");

/**
 * Calculate the CO2e emissions for food items.
 * @param {string} category - The category of the food.
 * @param {string} action - The action related to the food.
 * @param {string|null} option - The option for the food (can be null).
 * @param {number} count - The count of food items.
 * @param {string[]} side - An array of side options for the food.
 * @returns {[number, string]} An array containing the calculated CO2e emissions and the default option.
 * @throws {Error} If no calculation is found for the given category and action.
 */
async function calculationFood(category, action, option, count, side) {
    try {
      let co2eMainComponent = 0;
      let co2eSideComponent = 0;
      let defaultOption;
      
      const jsonData = await getData();

      if (option && option !== "null" && typeof option !== 'undefined') {
        const resultat = jsonData.filter((item) => {
            return (
              item.category === category &&
              item.action === action &&
              item.option === option
            );
          });
          if (resultat.length > 0) {
            co2eMainComponent = resultat[0].co2e;
          } else {
            co2eMainComponent = 0;
            throw new Error(`No calculation found for category: "${category}", action: "${action}"`);
          }
          defaultOption = option;        
      }

      if (typeof side !== 'undefined' && side.length > 0) {  
        const resultatsSide = jsonData.filter((item) => {
            return (
              item.category === category &&
              item.action === 'side' &&
              side.includes(item.option.trim())
            );
        });
        for (let i = 0; i < resultatsSide.length; i += 1) {
            co2eSideComponent += resultatsSide[i].co2e / resultatsSide.length;
        }
      }

    const result = (co2eMainComponent + co2eSideComponent) * count;
    return [Math.round(result), defaultOption];
    
    } catch (error) {
      throw error; 
    }
  }


module.exports = calculationFood;
