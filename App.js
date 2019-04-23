/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
// gail add a comment
// shawn added a comment

import React, { Component } from 'react';
import { View, Text } from "react-native";
import IndexScreen from './src/containers/IndexScreen';
import ListScreen from './src/components/List';
import QuestionnaireContainer from './src/containers/QuestionnaireContainer';
import QuestionScreen from './src/components/Question';
import styles from './src/styles/main';

// type Props = {};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: '', 
      questionnaires: [],
      currentStep: "index",
      selectedQuestionnaireId: 0

    }

    this.onPickerValueChange = this.onPickerValueChange.bind(this);
    this.updateSelectedQuestionnaireId = this.updateSelectedQuestionnaireId.bind(this);
    
  }

  // updates type and populate questionnaire array with corresponding list of questionnaires
  onPickerValueChange = (value) => {
    let stateCopy = {...this.state};
    stateCopy.type = value;
    this.setState(stateCopy, () => {
      let copy = {...this.state};
      copy.questionnaires = completeList.filter(q => {return q.type === this.state.type});
      this.setState(copy);
    });
  }

  updateSelectedQuestionnaireId = (id) => {
    let stateCopy = {...this.state};
    stateCopy.selectedQuestionnaireId = id;
    this.setState(stateCopy, () => { console.log(this.state) })
  }



  render () {
      return (
      <View style={styles.container}>
        {this.state.currentStep === 'index'  &&
          <IndexScreen questionnaires = {this.state.questionnaires}
                     selectedQuestionnaireId = {this.state.selectedQuestionnaireId}
                     type = {this.state.type}

                     onPickerValueChange = {this.onPickerValueChange}
                     updateSelectedQuestionnaireId = {this.updateSelectedQuestionnaireId}
        />
        }
        {this.state.currentStep === 'list' && 
          <QuestionnaireContainer />
        }
      </View>
    );
  }
}

export default App;

const completeList  = [
  {id: 1, type: "survey", title: "Housing Survey"},
  {id: 2, type: "survey", title: "Customer Satisfaction"},
  {id: 3, type: "survey", title: "Website Feedback"},
  {id: 4, type: "survey", title: "Employee Engagement"},
  {id: 5, type: "survey", title: "Brand Awareness"},
  {id: 6, type: "quiz", title: "General Information"},
  {id: 7, type: "quiz", title: "Science Trivia"},
  {id: 8, type: "quiz", title: "Recycling"},
  {id: 9, type: "quiz", title: "Financial Management"},
  {id: 10, type: "quiz", title: "Pet Ownership"},
  {id: 11, type: "game", title: "Game 1"},
  {id: 12, type: "game", title: "Game 2"},
  {id: 13, type: "game", title: "Game 3"},
  {id: 14, type: "game", title: "Game 4"},
  {id: 15, type: "game", title: "Game 5"},
]
