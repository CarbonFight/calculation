const getData = require('../utils/dataAcces');

async function getAllOption(category, action) {
   const jsonData = await getData();
  
   const optionsSet = new Set(
    jsonData.filter(item => item.category === category && item.action === action)
            .map(item => item.option));

   const options = Array.from(optionsSet);

   if (options.length > 0) {
     return options;
   } else {
     const error = new Error(`No options found for category : "${category}" , action : "${action}"`);
     error.status = 400;
     throw error;
   }
  }


module.exports = getAllOption;