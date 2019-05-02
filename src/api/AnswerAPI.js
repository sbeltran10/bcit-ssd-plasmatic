let AnswerAPI = {};

AnswerAPI.getByParentId = (parentId, cb) => {
  const baseUrl = 'https://1xiuiydref.execute-api.us-east-2.amazonaws.com/prod';
  fetch(`${baseUrl}?parentQuestion=${parentId}`)
    .then((r) => {
      if(r.status !== 200) {
        cb('error');
        return;
      }
      r.json()
      .then((rJson) => {
        cb(null,filteredData);
      })
      .catch((err) => {
        console.log(err);
      })
    })
}

export default AnswerAPI;