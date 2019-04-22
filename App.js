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

// type Props = {};
class App extends Component {
  render () {
    return (
      <MainApp />
    );
  }
}

export default App;

const MainNavigator = createStackNavigator({
  Index: { screen: IndexScreen },
  List: { screen: ListScreen },
  Questionnaire: { screen: QuestionnaireContainer },
  Question: { screen: QuestionScreen },
  // Result: { screen: ResultScreen}
});

const MainApp = createAppContainer(MainNavigator);

