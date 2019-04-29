let AnswerAPI = {};

AnswerAPI.getById = (cb) => {
  const baseUrl = 'https://2d10mwnooe.execute-api.us-east-2.amazonaws.com/prod';
  fetch(baseUrl)
    .then((r) => {
      if(r.status !== 200) {
        cb('error');
        return;
      }
      r.json()
      .then((rJson) => {
        // console.log(rJson);
        cb(null,rJson)
      })
      .catch((err) => {
        console.log(err);
      })
    })
}

export default AnswerAPI;