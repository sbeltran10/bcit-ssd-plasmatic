/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text } from "react-native";
import Index from './src/containers/Index';
import Intro from './src/containers/Intro';
import Question from './src/components/Question';
import SurveyResults from './src/components/SurveyResults';
import QuizResults from './src/components/QuizResults';
import styles from './src/styles/main';

import AnswerAPI from './src/api/AnswerAPI';
import QuestionnaireAPI from './src/api/QuestionnaireAPI';
import QuestionAPI from './src/api/QuestionAPI';

// example data
// import surveys from './example/surveys.json';
import questions from './example/questions.json';
import answers from './example/answers.json'
import results from './example/results.json';

import testQuizResults from './example/quizResults.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: '', 
      questionnaires: [],
      currentStep: "index",
      selectedQuestionnaireId: null,
      title:'',
      questionnaire: [],
      question: [],
      answers: [],
      selectedAnswer: [],
      modalVisible: false,
      summary: [],
      quizTitle: null,
      quizResults:[],
      totalCountOfQuestions: null,
      countCorrect: null

    }

    this.onPickerValueChange = this.onPickerValueChange.bind(this);
    this.updateSelectedQuestionnaireId = this.updateSelectedQuestionnaireId.bind(this);
    this.updateCurrentStep = this.updateCurrentStep.bind(this);

    this.selectAnswer = this.selectAnswer.bind(this);
    this.submitAnswer = this.submitAnswer.bind(this);
    this.saveToSummary = this.saveToSummary.bind(this);
    this.onExitButtonPress = this.onExitButtonPress.bind(this);

    this.fetchList = this.fetchList.bind(this);
    this.fetchQuestionnaire = this.fetchQuestionnaire.bind(this);
    this.fetchFirstQuestion = this.fetchFirstQuestion.bind(this);
    this.fetchQuestion = this.fetchQuestion.bind(this);
    this.fetchAnswers = this.fetchAnswers.bind(this);
    
  }

  componentDidMount() {
   
    // Test Data for quiz results screen
    //this.setState({quizTitle: testQuizResults.quizTitle});
    //this.setState({countCorrect: testQuizResults.countCorrect});
    //this.setState({totalCountOfQuestions: testQuizResults.totalCountOfQuestions});
    //this.setState({quizResults: testQuizResults.quizResults});
     
               
    // AnswerAPI.getById(1, (err, data) => {
    //   let stateCopy = {...this.state};
    //   if(err) console.log(err);
    //   stateCopy.answers = data;
    //   this.setState(stateCopy, () => { console.log(this.state)});
    // });
    this.onPickerValueChange('survey');
  }

  
  // call back for setState in onPickerValueChange
  fetchList = () => {
    QuestionnaireAPI.getByType(this.state.type, (err, data) => {
      let stateCopy = {...this.state};
      if(err) console.log(err);
      stateCopy.questionnaires = data.Items;
      this.setState(stateCopy);
    })
  }

  // updates type and populate questionnaire array with corresponding list of questionnaires
  onPickerValueChange = (type) => {
    let stateCopy = {...this.state};
    stateCopy.type = type;
    // reset selected questionnaire to none everytime a new category is selected
    stateCopy.selectedQuestionnaireId = 0;
    this.setState(stateCopy, () => this.fetchList());
  }

  updateSelectedQuestionnaireId = (id) => {
    let stateCopy = {...this.state};
    stateCopy.selectedQuestionnaireId = id;
    this.setState(stateCopy, () => { console.log(this.state) })
  }

  // used as callback @ fetchQuestionnaire, fetchAnswers
  updateCurrentStep = (step) => {
    let stateCopy = {...this.state};
    stateCopy.currentStep = step;
    this.setState(stateCopy);
  }

  // fetches first question based on selected survey
  fetchQuestionnaire = (step) => {
    let stateCopy = {...this.state};
    stateCopy.questionnaire = stateCopy.questionnaires.filter(q => { return q.id === stateCopy.selectedQuestionnaireId });
    this.setState(stateCopy, ()=>{ console.log(this.state); this.updateCurrentStep(step) })
  }

  fetchFirstQuestion = (step) => {
    // let stateCopy = {...this.state};
    // stateCopy.question = questions.filter(q => { return q.id === this.state.questionnaire[0].firstQuestionId });
    // this.setState(stateCopy, () => { this.fetchAnswers(step) });
    QuestionAPI.readById(this.state.questionnaire[0].firstQuestionId, (err, data) => {
      if(err) console.log(err);
      let stateCopy = {...this.state};
      if(data.Items.length === 0) {
        alert('no question found!');
        stateCopy.currentStep = 'index';
      }else {
        stateCopy.question = data.Items;
      }
      this.setState(stateCopy, () => { this.fetchAnswers(step) });
    })
  }


  /*-------------------------------methods for Question component----------------------------------------*/


  // used as callback @ fetchFirstQuestion, fetchQuestion 
  fetchAnswers = (step) => {
    AnswerAPI.getById((err, data) => {
      if(err) console.log(err);
      let stateCopy = {...this.state};
      console.log(data);
      stateCopy.answers = data.Items.filter(a => { return a.parentQuestion === this.state.question[0].id });
      this.setState(stateCopy, () => {this.updateCurrentStep(step)})
    })
  }

  fetchQuestion = (step) => {
    // let stateCopy = {...this.state};
    // let newQuestion = questions.filter(q => { return q.id === this.state.selectedAnswer[0].childQuestion });
    // if (newQuestion.length === 0) {
    //   stateCopy.question = [];
    //   stateCopy.currentStep = 'results';
    //   this.setState(stateCopy);
    // } else {
    //   stateCopy.question = newQuestion;
    //   this.setState(stateCopy, () => { this.fetchAnswers(step) });
    // }
    QuestionAPI.readById(this.state.selectedAnswer[0].childQuestion, (err, data) => {
      if(err) console.log(err);
      let stateCopy = {...this.state};
      if(data.Items.length === 0 && this.state.type === 'survey') {
        stateCopy.question = [];
        stateCopy.currentStep = 'results';
      } else if(data.Items.length === 0 && this.state.type === 'quiz') {
        stateCopy.question = [];
        stateCopy.currentStep = 'quizResults';
      } else {
        stateCopy.question = data.Items;
      }
      this.setState(stateCopy, () => { this.fetchAnswers(step) });
    })
  }

  selectAnswer = (id) => {
    stateCopy = {...this.state};
    stateCopy.selectedAnswer = stateCopy.answers.filter(a => { return a.id === id });
    this.setState(stateCopy, () => { console.log(this.state) });
  }

  submitAnswer = (step) => {
    this.fetchQuestion(step);
  }

  // qa(question & answer pair)
  saveToSummary = (qa, step) => {
    stateCopy = {...this.state};
    stateCopy.summary.push(qa);
    this.setState(stateCopy, () => { console.log(this.state); this.submitAnswer(step) });
  }

  onExitButtonPress = () => {
    let step = 'index'
    let stateCopy = {...this.state};
    stateCopy.type = '';
    stateCopy.summary = [];
    this.setState(stateCopy, () => { console.log(this.state); this.updateCurrentStep(step) })
  }

  /*---  render  ---*/


  render () {
      return (
      <View style={styles.container}>

        {/* ---index screen--- */}
        {
          this.state.currentStep === 'index'  &&
          <Index 
            questionnaires = {this.state.questionnaires}
            selectedQuestionnaireId = {this.state.selectedQuestionnaireId}
            type = {this.state.type}
            title = {this.state.title}

            onPickerValueChange = {this.onPickerValueChange}
            updateSelectedQuestionnaireId = {this.updateSelectedQuestionnaireId}
            updateSelectedQuestionnaireTitle = {this.updateSelectedQuestionnaireTitle}
            fetchQuestionnaire = {this.fetchQuestionnaire}
          />
        }

        {/* ---intro screen--- */}
        {
          this.state.currentStep === 'intro' && 
          <Intro 
            updateCurrentStep = {this.updateCurrentStep} 
            questionnaire = {this.state.questionnaire}
            fetchFirstQuestion = {this.fetchFirstQuestion}
          />
        }

        {/* ---question screen--- */}
        {
          this.state.currentStep === 'question' && this.state.question.length !== 0 &&
          <Question 
            question = {this.state.question}
            answers = {this.state.answers}
            selectedAnswerId = {this.state.selectedAnswerId}
            selectedAnswer = {this.state.selectedAnswer}
            selectAnswer = {this.selectAnswer}
            saveToSummary = {this.saveToSummary}
            fetchQuestion = {this.fetchQuestion}
            modalVisible = {this.state.modalVisible}
          />
        }

        {/* --- Need to add code to tell whether to go to results or quizResults screen---*/}

        {/* ---result screen--- */}
        {
          this.state.currentStep === 'results' && this.state.question.length === 0 &&
          <SurveyResults 
            saveToSummary = {this.saveToSummary}
            onExitButtonPress = {this.onExitButtonPress}
          />
        }
        {/* ---quiz result screen--- */}
        {
          this.state.currentStep === 'quizResults' && this.state.question.length === 0 &&
          <QuizResults 
            quizTitle = {this.state.quizTitle}
            totalCountOfQuestions = {this.state.totalCountOfQuestions}
            countCorrect = {this.state.countCorrect}
            quizResults = {this.state.summary}
            onExitButtonPress = {this.onExitButtonPress}
          />
        }

      </View>
    );
  }
}

export default App;


// QuestionsAPI.readById(1, function(error, object){
//   if(error) alert(error)
//   else{
//     this.setState({data:data})
//   }
// })