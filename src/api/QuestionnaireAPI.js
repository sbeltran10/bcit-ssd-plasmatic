let QuestionnaireAPI = {};

QuestionnaireAPI.getByType = (type, cb) => {
  const baseURL = 'https://rtrci0d87k.execute-api.us-east-2.amazonaws.com/prod';
  fetch(`${baseURL}?questionnaireType=${type}`)
    .then((r) => {
      if (r.status !== 200) {
        cb('error');
        return;
      }
      r.json()
        .then((rJson) => {
          cb(null, rJson.Items);
        })
        .catch((err) => {
          cb(err);
        })
    })
}

export default QuestionnaireAPI;