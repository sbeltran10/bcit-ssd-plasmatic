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
      question: {},
      answers: [],
      selectedAnswerId: null,

    }

    this.onPickerValueChange = this.onPickerValueChange.bind(this);
    this.updateSelectedQuestionnaireId = this.updateSelectedQuestionnaireId.bind(this);
    this.updateCurrentStep = this.updateCurrentStep.bind(this);
    this.fetchList = this.fetchList.bind(this);

    this.selectAnswer = this.selectAnswer.bind(this);
    
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

  selectAnswer = (id) => {
    stateCopy = {...this.state};
    stateCopy.selectedAnswerId = answers.filter(a => { return q.id === id });
    this.setState(stateCopy);
  }

  submitAnswer = () => {
    
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
          />
        }

        {/* ---intro screen--- */}
        {
          this.state.currentStep === 'intro' && 
          <Intro updateCurrentStep = {this.updateCurrentStep} />
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