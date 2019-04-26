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
import styles from './src/styles/main';

import AnswerAPI from './src/api/AnswerAPI';

//example data
import surveys from './example/surveys.json';
import questions from './example/questions.json';
import answers from './example/answers.json'
import results from './example/results.json';

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
      summary: []
    }

    this.onPickerValueChange = this.onPickerValueChange.bind(this);
    this.updateSelectedQuestionnaireId = this.updateSelectedQuestionnaireId.bind(this);
    // this.updateSelectedQuestionnaireTitle = this.updateSelectedQuestionnaireTitle.bind(this);
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

  // componentDidMount() {
  //   AnswerAPI.read();
  // }

  
  // call back for setState in onPickerValueChange
  fetchList = () => {
    let stateCopy = {...this.state};
    stateCopy.questionnaires = surveys.filter(q => { return q.type === this.state.type });
    this.setState(stateCopy);
  }

  // updates type and populate questionnaire array with corresponding list of questionnaires
  onPickerValueChange = (type) => {
    let stateCopy = {...this.state};
    stateCopy.type = type;
    this.setState(stateCopy, () => this.fetchList());
  }

  updateSelectedQuestionnaireId = (id) => {
    let stateCopy = {...this.state};
    stateCopy.selectedQuestionnaireId = id;
    this.setState(stateCopy, () => { console.log(this.state) })
  }

  // updateSelectedQuestionnaireTitle = (title) => {
  //   let stateCopy = {...this.state};
  //   stateCopy.title = title;
  //   this.setState(stateCopy, () => { console.log(this.state) })
  // }

  // used as callback @ fetchQuestionnaire, fetchAnswers
  updateCurrentStep = (step) => {
    let stateCopy = {...this.state};
    stateCopy.currentStep = step;
    this.setState(stateCopy);
  }

  // fetches first question based on selected survey
  fetchQuestionnaire = (step) => {
    let stateCopy = {...this.state};
    stateCopy.questionnaire = surveys.filter(q => { return q.id === stateCopy.selectedQuestionnaireId });
    this.setState(stateCopy, ()=>{ this.updateCurrentStep(step) });
  }

  fetchFirstQuestion = (step) => {
    let stateCopy = {...this.state};
    stateCopy.question = questions.filter(q => { return q.id === this.state.questionnaire[0].firstQuestionId });
    this.setState(stateCopy, () => { this.fetchAnswers(step) });
  }


  /*-------------------------------methods for Question component----------------------------------------*/


  // used as callback @ fetchFirstQuestion, fetchQuestion 
  fetchAnswers = (step) => {
    let stateCopy = {...this.state};
    stateCopy.answers = answers.filter(a => { return a.parentQuestion === this.state.question[0].id });
    this.setState(stateCopy, () => {this.updateCurrentStep(step)});
  }

  fetchQuestion = (step) => {
    let stateCopy = {...this.state};
    let newQuestion = questions.filter(q => { return q.id === this.state.selectedAnswer[0].childQuestion });
    if (newQuestion.length === 0) {
      stateCopy.question = [];
      stateCopy.currentStep = 'results';
      this.setState(stateCopy);
    } else {
      stateCopy.question = newQuestion;
      this.setState(stateCopy, () => { this.fetchAnswers(step) });
    }
  }

  selectAnswer = (id) => {
    stateCopy = {...this.state};
    stateCopy.selectedAnswer = answers.filter(a => { return a.id === id });
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

        {/* ---result screen--- */}
        {
          this.state.currentStep === 'results' && this.state.question.length === 0 &&
          <SurveyResults 
            saveToSummary = {this.saveToSummary}
            onExitButtonPress = {this.onExitButtonPress}
          />
        }

      </View>
    );
  }
}

export default App;