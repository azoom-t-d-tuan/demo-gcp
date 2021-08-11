const express = require('express');
const app = express();
const knex = require('./database')

app.get('/', async (req, res) => {
  const name = await knex.select('account_name').from('sublease_user_bank_account')
  res.send(name);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});