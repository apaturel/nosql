/**
 * @swagger
 * /api/contacts:
 *  get:
 *    description: Use to request all contacts
 *    responses:
 *      '200':
 *        description: A successful response
 */
module.exports = (app, bigquery) => {
    app.get('/api/contacts', async (req, res) => {
      const query = `SELECT * FROM \`nosql.nosql\``;
      const options = { query };
      const [rows] = await bigquery.query(options);
      res.json(rows);
    });
  
    // Vous pouvez ajouter les autres routes (POST, PUT, DELETE) de la même manière...
  };
  