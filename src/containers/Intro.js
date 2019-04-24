import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, ListItem } from 'react-native-elements';
// import styles from '../styles/main';

class Intro extends Component {

  render() {
    return (
      <View style={{backgroundColor: 'green'}}>
          <Text>{this.props.questionnaire[0].title}</Text>
          <Text>{this.props.questionnaire[0].description}</Text>
          <Button title="Start" onPress={()=> {
            let step = 'question'
            let fetchFirstQuestion = this.props.fetchFirstQuestion;
            fetchFirstQuestion(step);
          }} />
      </View>
    )
  }
}

export default Intro;
