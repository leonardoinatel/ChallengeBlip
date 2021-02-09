const axios = require('axios');
const arraySort = require('array-sort');

const url = 'https://api.github.com/orgs/takenet/repos?per_page=100';

const setJsonCarousel = (result) => ({
  itemType: "application/vnd.lime.document-select+json",
  items: result
})

const convertApi = async (req, res, next) => {
  const { data } = await axios(url);

  const csharp = Object.keys(data).filter((key) => data[key].language == "C#");
  const csharpOrderByDate = csharp.map((item) => data[item]);
  const array = arraySort(csharpOrderByDate, 'created_at').slice(0,5);
  const cSharpSorted = arraySort(array, 'created_at', { reverse: true })
  const result = cSharpSorted.map(({full_name, owner: { avatar_url }, description }) => (
    { header: { 
        type: "application/vnd.lime.media-link+json",
        value: { 
          title: full_name,
          text: description,
          type: "image/png",
          uri: avatar_url,
        }
      }}))
  
  req.result = setJsonCarousel(result);

  next();
}

module.exports = { convertApi };