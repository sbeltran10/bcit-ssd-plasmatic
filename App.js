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
import {createStackNavigator, createAppContainer} from 'react-navigation';
import IndexScreen from './src/containers/IndexScreen';
import ListScreen from './src/components/List';
import QuestionnaireContainer from './src/containers/QuestionnaireContainer';
import QuestionScreen from './src/components/Question';
import console = require('console');

// type Props = {};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: '', 
      questionnaires: [],
      currentStep: "",
      selectedQuestionnaireId: 0

    }

    this.onPickerValueChange = this.onPickerValueChange.bind(this);
    this.updateSelectedQuestionnaireId = this.updateSelectedQuestionnaireId.bind(this);
    
  }

  onPickerValueChange = (value) => {
    this.setState({type: value},
        () => {this.setState(
                {
                    list: completeList.filter(q => { return q.type == this.state.type})}) 
                }
    );
  }

  updateSelectedQuestionnaireId = (id) => {
    let stateCopy = {...this.state};
    stateCopy.selectedQuestionnaireId = id;
    this.setState(stateCopy, () => { console.log(this.state) })
  }

  render () {
      return (
      <View>
        <IndexScreen questionnaires={this.state.questionnaires}
                     onPickerValueChange={this.onPickerValueChange}
                     selectedQuestionnaireId={this.state.selectedQuestionnaireId}
                     updateSelectedQuestionnaireId={this.updateSelectedQuestionnaireId}
                     type={this.state.type}              
        />
        <QuestionnaireContainer />
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
