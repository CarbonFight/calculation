const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger.json");
const app = express();
app.use(cors());

const calculationRoutes = require("./routes/calculationRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const actionRoutes = require("./routes/actionRoutes");
const optionRoutes = require("./routes/optionRoutes");

app.use((req, res, next) => {
  res.set('Cache-Control', 'public, max-age=7200');
  next();
});


app.use("/v1/calculations", calculationRoutes);
app.use("/v1/categories", categoryRoutes);
app.use("/v1/actions", actionRoutes);
app.use("/v1/options", optionRoutes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

exports.v1 = functions.region('europe-west6').https.onRequest(app);

/* Use this part of code when you want to run the API locally */
/*const port = 3000;
app.listen(port, () => {
  console.log(`Le serveur écoute sur le port ${port}...`);
});*/
