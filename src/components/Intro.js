import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, Card, ListItem, Button, Icon } from 'react-native-elements';
import styles from '../styles/Intro';


class Intro extends Component {

  render () {
    return (
      <View style={styles.mainView}>
        {/* <Text>{this.props.questionnaire[0].title}</Text>
          <Text>{this.props.questionnaire[0].description}</Text>
          <Button title="Start" onPress={()=> {
            let step = 'question'
            let fetchFirstQuestion = this.props.fetchFirstQuestion;
            fetchFirstQuestion(step);
          }} /> */}

        <View style={styles.titleDescView}>
          <Text h3 style={styles.title}>
            {this.props.questionnaire[0].title}
          </Text>
          <Text style={styles.desc} >
            {this.props.questionnaire[0].desc}
          </Text>
        </View>
        <Button
          icon={<Icon name='code' color='#ffffff' />}
          backgroundColor='#03A9F4'
          buttonStyle={styles.submitButton}
          title="Start"
          onPress={() => {
            let step = 'question'
            let fetchFirstQuestion = this.props.fetchFirstQuestion;
            fetchFirstQuestion(step);
          }
          }
        />
      </View >
    )
  }
}

export default Intro;
