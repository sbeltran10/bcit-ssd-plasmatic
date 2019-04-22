import React, { Component } from 'react';
import Index from '../components/Index'
import { View, Text } from 'react-native';
import { Button, ListItem } from 'react-native-elements';
import styles from '../styles/Main';

class QuestionnaireContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      text: "Alright then"
    }
  }

  render() {
    return (
      // <Index {...this.props} {...this.state}/>
      <View style={styles.style1}>
          <Text>Questionnaire container</Text>
          <Button title="Start" onPress={() => this.props.navigation.navigate('Question')} />
      </View>
    )
  }
}

export default QuestionnaireContainer;

const answers = [
  {
    "id": 1,
    "content": "Email",
    "parentQuestion": 1,
    "childQuestion": 2
  },
  {
    "id": 2,
    "content": "Newspaper ad",
    "parentQuestion": 1,
    "childQuestion": 2
  },
  {
    "id": 3,
    "content": "Radio",
    "parentQuestion": 1,
    "childQuestion": 2
  },
  {
    "id": 4,
    "content": "Tv",
    "parentQuestion": 1,
    "childQuestion": 2
  },
  {
    "id": 5,
    "content": "Good",
    "parentQuestion": 2,
    "childQuestion": 3
  },
  {
    "id": 6,
    "content": "Average",
    "parentQuestion": 2,
    "childQuestion": 3
  },
  {
    "id": 7,
    "content": "Bad",
    "parentQuestion": 2,
    "childQuestion": 3
  },
  {
    "id": 8,
    "content": "Less than 1 year",
    "parentQuestion": 3,
    "childQuestion": 4
  },
  {
    "id": 9,
    "content": "1 - 3 years",
    "parentQuestion": 3,
    "childQuestion": 4
  },
  {
    "id": 10,
    "content": "More than 3 years",
    "parentQuestion": 3,
    "childQuestion": 4
  },
  {
    "id": 11,
    "content": "Yes",
    "parentQuestion": 4,
    "childQuestion": -1
  },
  {
    "id": 12,
    "content": "No",
    "parentQuestion": 4,
    "childQuestion": -1
  }
]

const questions = [
  {
    "id": 1,
    "content":"How did you hear about our website?"
  },
  {
    "id": 2,
    "content":"How would you rate your experience with our website?"
  },
  {
    "id": 3,
    "content":"For how many years have you been using websites similar to this one?"
  },
  {
    "id": 4,
    "content":"Would you recommend our website to your friends?"
  }
]

const questionnaire = [
  {
    "id": 1,
    "title": "Website survey",
    "description": "In the following survey we ask you questions about your experience with our website",
    "type": "survey",
    "firstQuestionId": 1
  }
]