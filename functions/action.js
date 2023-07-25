const getData = require('../utils/dataAcces');

async function getAllAction(category) {
   const jsonData = await getData();
  
   const actionSet = new Set(
     jsonData.filter(item => item.category === category)
             .map(item => item.action));
   const actions = Array.from(actionSet);

   if (actions.length > 0) {
     return actions;
   } else {
     const error = new Error(`No actions found for category: "${category}"`);
     error.status = 400;
     throw error;
   }
}


module.exports = getAllAction;