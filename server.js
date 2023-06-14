const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {BigQuery} = require('@google-cloud/bigquery');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const bigquery = new BigQuery({
    keyFilename: "nosql-key.json",
    projectId: 'root-anvil-389812',
  });

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Contacts API',
      description: 'Contacts API Information',
      contact: {
        name: 'Your Name'
      },
      servers: ['localhost:8000']
    }
  },
  apis: ['./contacts.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

require('./contacts')(app, bigquery);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
