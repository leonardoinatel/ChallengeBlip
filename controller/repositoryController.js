const axios = require('axios');
const arraySort = require('array-sort');

const url = 'https://api.github.com/orgs/takenet/repos?per_page=100';

const getRepository = async (_req, res) => {
  try {
    const { data } = await axios(url);

    const csharp = Object.keys(data).filter((key) => data[key].language == "C#");
    const csharpOrderByDate = csharp.map((item) => data[item]);
    const array = arraySort(csharpOrderByDate, 'created_at').slice(0,5);
    const cSharpSorted = arraySort(array, 'created_at', { reverse: true })

    const result = cSharpSorted.map(({full_name, owner: { avatar_url }, description }) => ({ full_name, owner: { avatar_url }, description }));

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message});
  }
}

module.exports = {
  getRepository,
}

