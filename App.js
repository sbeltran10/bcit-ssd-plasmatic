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
      question: {},
      answers: [],
      selectedAnswer: null,

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
    
  }

  // fetches first question based on selected survey

  fetchQuestionnaire = (step) => {
    console.log("fetchQuestionnaire Called");
    stateCopy = {...this.state};
    stateCopy.questionnaire = surveys.filter(q => { return q.id === stateCopy.selectedQuestionnaireId });
    this.setState(stateCopy, ()=>{this.updateCurrentStep(step)});
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

  updateCurrentStep = (step) => {
    let stateCopy = {...this.state};
    stateCopy.currentStep = step;
    this.setState(stateCopy);
  }

  // methods for Question component

  fetchFirstQuestion = () => {
    stateCopy = {...this.state};
    stateCopy.question = questions.filter(q => { return q.id === this.state.questionnaire.firstQuestionId });
    this.setState(stateCopy);
  }

  fetchQuestion = () => {
    let stateCopy = {...this.state};
    stateCopy.question = questions.filter(q => { return q.id === this.state.selectedAnswer.childQuestion });
    this.setState(stateCopy, () => { console.log(this.state) });
  }

  selectAnswer = (id) => {
    stateCopy = {...this.state};
    stateCopy.selectedAnswer = answers.filter(a => { return q.id === id });
    this.setState(stateCopy);
  }

  submitAnswer = () => {
    this.fetchQuestion();
  }


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
            updateCurrentStep = {this.updateCurrentStep}

            fetchQuestionnaire = {this.fetchQuestionnaire}
          />
        }

        {/* ---intro screen--- */}
        {
          this.state.currentStep === 'intro' && 
          <Intro 
            updateCurrentStep = {this.updateCurrentStep} 
            questionnaire = {this.state.questionnaire}
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
            modalVisible = {this.state.modalVisible}
          />
        }

      </View>
    );
  }
}

export default App;