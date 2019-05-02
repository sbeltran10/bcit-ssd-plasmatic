import _ from 'lodash';

let AnswerAPI = {};

AnswerAPI.getByParentId = (parentId, cb) => {
  const baseUrl = 'https://1xiuiydref.execute-api.us-east-2.amazonaws.com/prod';
  fetch(`${baseUrl}?parentQuestion=${parentId}`)
    .then((r) => {
      if (r.status !== 200) {
        cb('error');
        return;
      }
      r.json()
        .then((rJson) => {
          let answers = rJson.Items;
          cb(null, sortAnswers(answers));
        })
        .catch((err) => {
          console.log(err);
          cb(err)
        })
    })
}

const sortAnswers = (answers) => {
  let sortedAnswers = _.sortBy(answers, ['content']);
  const answerRegex = RegExp(/^.*of.*the.*above.*/);
  const answersToMove = [];

  for (let i = 0; i < sortedAnswers.length; i++) {
    const regexTest = answerRegex.test(sortedAnswers[i].content);
    if (regexTest) {
      answersToMove.push(sortedAnswers.splice(i, 1)[0])
      i--;
    }
  }

  for (const answer of answersToMove) {
    sortedAnswers.push(answer);
  }
  return sortedAnswers;
}

export default AnswerAPI;