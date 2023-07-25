const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const app = express();

const calculationRoutes = require('./routes/calculationRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const actionRoutes = require('./routes/actionRoutes');
const optionRoutes = require('./routes/optionRoutes');


app.use('/calculation', calculationRoutes);
app.use('/categories', categoryRoutes);
app.use('/actions', actionRoutes);
app.use('/options', optionRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));





