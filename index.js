const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

const repositoryController = require('./controller/repositoryController');
const convertData = require('./middlewares/convertData');

app.use(cors());
app.use(express.json());

app.get(
  '/repository',
  convertData.convertApi,
  repositoryController.getRepository
);

app.listen(port, () => console.log('API rodando na porta 3001!'));
