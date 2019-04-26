let QuestionsAPI = {};

QuestionsAPI.readById = (id) => {
  // Do fetch call
  const baseUrl = 'https://rtwn92w64m.execute-api.us-east-2.amazonaws.com/prod'
  fetch(`${baseUrl}?id=${id}`)
    .then((response) => {
      if (response.status !== 200) {
        // Handle error response
        return;
      }

      response.json().then((data) => {
        // Return this data
        console.log(data);
      });
    })
    .catch((err) => {
      // Handle this error
    });
}

export default QuestionsAPI;