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
          sortAnswers(answers)
          console.log(answers)
          cb(null, answers);
        })
        .catch((err) => {
          console.log(err);
          cb(err)
        })
    })
}

const sortAnswers = (answers) => {
  _.orderBy(answers, ['content'], ['desc']);
  const answerRegex = RegExp(/^.*of.*the.*above.*/);
  const answersToMove = [];

  for (let i = 0; i < answers.length; i++) {
    const regexTest = answerRegex.test(answers[i].content);
    if (regexTest) {
      answersToMove.push(answers.splice(i, 1)[0])
      i--;
    }
  }

  for (const answer of answersToMove) {
    answers.push(answer);
  }
}

export default AnswerAPI;