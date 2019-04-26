let QuestionnaireAPI = {};

QuestionnaireAPI.getByType = (type, cb) => {
    const baseURL = 'https://rtrci0d87k.execute-api.us-east-2.amazonaws.com/prod';
    fetch(`${baseURL}?questionnaireType=${type}`)
        .then((r) => {
            if(r.status !== 200) {
                cb('error');
                return;
            }
            r.json()
            .then((rJson) => {
                console.log(rJson);
                cb(null, rJson)
            })
            .catch((err) => {
                console.log(err);
            })
        })
}

export default QuestionnaireAPI;