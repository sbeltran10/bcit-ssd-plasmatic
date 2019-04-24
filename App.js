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
import styles from './src/styles/main';

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
      questionnaire: [],
      question: [],
      answers: [],
      selectedAnswer: [],
      modalVisible: false,
      summary: []
    }

    this.onPickerValueChange = this.onPickerValueChange.bind(this);
    this.updateSelectedQuestionnaireId = this.updateSelectedQuestionnaireId.bind(this);
    this.updateCurrentStep = this.updateCurrentStep.bind(this);

    this.selectAnswer = this.selectAnswer.bind(this);
    this.submitAnswer = this.submitAnswer.bind(this);

    this.fetchList = this.fetchList.bind(this);
    this.fetchQuestionnaire = this.fetchQuestionnaire.bind(this);
    this.fetchFirstQuestion = this.fetchFirstQuestion.bind(this);
    this.fetchQuestion = this.fetchQuestion.bind(this);
    this.fetchAnswers = this.fetchAnswers.bind(this);
    
  }

  
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

  // used as callback @ fetchQuestionnaire, fetchAnswers
  updateCurrentStep = (step) => {
    let stateCopy = {...this.state};
    stateCopy.currentStep = step;
    this.setState(stateCopy);
  }

  // fetches first question based on selected survey
  fetchQuestionnaire = (step) => {
    stateCopy = {...this.state};
    stateCopy.questionnaire = surveys.filter(q => { return q.id === stateCopy.selectedQuestionnaireId });
    this.setState(stateCopy, ()=>{this.updateCurrentStep(step)});
  }

  fetchFirstQuestion = (step) => {
    stateCopy = {...this.state};
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
    stateCopy.question = questions.filter(q => { return q.id === this.state.selectedAnswer[0].childQuestion });
    this.setState(stateCopy, () => { this.fetchAnswers(step) });
  }

  selectAnswer = (id) => {
    stateCopy = {...this.state};
    stateCopy.selectedAnswer = answers.filter(a => { return a.id === id });
    this.setState(stateCopy, () => { console.log(this.state) });
  }

  submitAnswer = (step) => {
    this.fetchQuestion(step);
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

            onPickerValueChange = {this.onPickerValueChange}
            updateSelectedQuestionnaireId = {this.updateSelectedQuestionnaireId}
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
          this.state.currentStep === 'question' &&
          <Question 
            question = {this.state.question}
            answers = {this.state.answers}
            selectedAnswerId = {this.state.selectedAnswerId}
            selectAnswer = {this.selectAnswer}
            submitAnswer = {this.submitAnswer}
            fetchQuestion = {this.fetchQuestion}
            modalVisible = {this.state.modalVisible}
          />
        }

      </View>
    );
  }
}

export default App;