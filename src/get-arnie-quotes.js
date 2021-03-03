const { httpGet } = require('./mock-http-interface');

const getArnieQuotes = async (urls) => {
  const requests = urls.map(url => httpGet(url));

  return Promise.all(requests)
    .then(responses => responses.map(
      response => response.status === 200 ?
        { 'Arnie Quote': (JSON.parse(response.body)).message }
        :
        { 'FAILURE': (JSON.parse(response.body)).message }
    ));
};

module.exports = {
  getArnieQuotes,
};
