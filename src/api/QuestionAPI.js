let QuestionAPI = {};

QuestionAPI.readById = (id, callback) => {
  const baseUrl = 'https://rtwn92w64m.execute-api.us-east-2.amazonaws.com/prod'
  fetch(`${baseUrl}?id=${id}`)
    .then((response) => {
      if (response.status !== 200) {
        callback('An error occured getting the response from the server')
        return;
      }

      response.json().then((data) => {
        callback(null, data.Items)
      });
    })
    .catch((err) => {
      callback(err)
    });
}

export default QuestionAPI;