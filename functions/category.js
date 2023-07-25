const getData = require('../utils/dataAcces');

async function getAllCategory() {
   const jsonData = await getData();
  
   const categoriesSet = new Set(jsonData.map(item => item.category));
   const categories = Array.from(categoriesSet);

   if (categories.length > 0) {
     return categories;
   } else {
     const error = new Error(`No category found`);
     error.status = 400;
     throw error;
   }
  }


module.exports = getAllCategory;