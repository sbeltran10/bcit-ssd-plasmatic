import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
// import styles from '../styles/main';

class Intro extends Component {

  render() {
    return (
      <View style={{backgroundColor: 'green'}}>
          {/* <Text>{this.props.questionnaire[0].title}</Text>
          <Text>{this.props.questionnaire[0].description}</Text>
          <Button title="Start" onPress={()=> {
            let step = 'question'
            let fetchFirstQuestion = this.props.fetchFirstQuestion;
            fetchFirstQuestion(step);
          }} /> */}

      <Card title={this.props.questionnaire[0].title}>
        <Text style={{marginBottom: 10}}>
          {this.props.questionnaire[0].description}
        </Text>
        <Button
          icon={<Icon name='code' color='#ffffff' />}
          backgroundColor='#03A9F4'
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          title="Start" onPress={()=> {
            let step = 'question'
            let fetchFirstQuestion = this.props.fetchFirstQuestion;
            fetchFirstQuestion(step);
            }
          }
        />
      </Card>
      </View>
    )
  }
}

export default Intro;
