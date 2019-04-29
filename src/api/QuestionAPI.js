let QuestionAPI = {};

QuestionAPI.readById = (id, callback) => {
  // Do fetch call
  const baseUrl = 'https://rtwn92w64m.execute-api.us-east-2.amazonaws.com/prod'
  fetch(`${baseUrl}?id=${id}`)
    .then((response) => {
      if (response.status !== 200) {
        // Handle error response
        callback('An error occured getting the response from the server')
        return;
      }

      response.json().then((data) => {
        // Return this data
        console.log(data);
        callback(null, data)
      });
    })
    .catch((err) => {
      // Handle this error
      callback(err)
    });
}

export default QuestionAPI;