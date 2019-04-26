let AnswerAPI = {};

AnswerAPI.read = () => {
  const url = 'https://2d10mwnooe.execute-api.us-east-2.amazonaws.com/prod';
  return fetch(url).then(r => r.json())
                   .then(rjson => console.log(rjson))
                   .catch(e => console.log(e));
}

export default AnswerAPI;