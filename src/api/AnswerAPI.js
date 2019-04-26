let AnswerAPI = {};

AnswerAPI.getById = (id, cb) => {
  const baseUrl = 'https://p9q0yfl9o4.execute-api.us-east-2.amazonaws.com/prod';
  fetch(`${baseUrl}?id=${id}`)
    .then((r) => {
      if(r.status !== 200) {
        cb('error');
        return;
      }
      r.json()
      .then((rJson) => {
        console.log(rJson);
        cb(null,rJson)
      })
      .catch((err) => {
        console.log(err);
      })
    })
}

export default AnswerAPI;