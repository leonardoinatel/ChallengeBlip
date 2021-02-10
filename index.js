const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

const repositoryController = require('./controller/repositoryController');
const convertData = require('./middlewares/convertData');

app.use(cors());
app.use(express.json());

app.get(
  '/repository',
  convertData.convertApi,
  repositoryController.getRepository
);

app.listen(PORT, () => console.log('API rodando na porta 3000!'));
