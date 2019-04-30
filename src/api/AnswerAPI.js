let AnswerAPI = {};

AnswerAPI.getById = (id, cb) => {
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
        filteredData = rJson.Items.filter(a => { return a.parentQuestion === id });
        cb(null,filteredData);
      })
      .catch((err) => {
        console.log(err);
      })
    })
}

export default AnswerAPI;