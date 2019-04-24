import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, ListItem } from 'react-native-elements';
// import styles from '../styles/main';


class Intro extends Component {

  render() {
    return (
      <View style={{backgroundColor: 'green'}}>
          <Text>Questionnaire Intro</Text>
          <Text>questionnaire Description</Text>
          <Button title="Start" onPress={()=> {
            let step = 'question'
            let updater = this.props.updateCurrentStep;
            updater(step);
          }} />
      </View>
    )
  }
}

export default Intro;
