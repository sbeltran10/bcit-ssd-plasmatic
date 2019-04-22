import React from 'react';
import { View } from 'react-native';
import { Text, Button, ListItem, Overlay } from 'react-native-elements';
import styles from '../styles/Question';
import { ScrollView } from 'react-native-gesture-handler';

const props = {
  question: {
    "id": 1,
    "content": "How did you hear about our website?"
  },
  answers: [
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
    }
  ],
  selectAnswer: () => { },
  submitAnswer: () => { },
  modalVisible: false,
  selectedAnswerId: 2
}

export default ({ question, answers, selectAnswer, submitAnswer, modalVisible, selectedAnswerId }) => (
  <View style={styles.mainView}>
    <View>
      <Text h4>{props.question.content}</Text>
    </View>
    <View>
      <ScrollView>
        {
          props.answers.map((answer, i) => (
            <ListItem
              key={i}
              leftIcon={props.selectedAnswerId === answer.id ?
                { name: 'radio-button-checked' }
                :
                { name: 'radio-button-unchecked' }}
              title={answer.content}
              onPress={() => props.selectAnswer(i)}
              containerStyle={props.selectedAnswerId === answer.id ?
                styles.answerContainerSelected
                :
                styles.answerContainer
              }
            />
          ))
        }
      </ScrollView>
      <Button
        containerStyle={styles.submitButton}
        onPress={props.submitAnswer}
        title="Submit answer" />
    </View>
    <Overlay
      isVisible={props.modalVisible}
      windowBackgroundColor="rgba(255, 255, 255, .5)"
      width="auto"
      height="auto"
    >
      <View></View>
    </Overlay>
  </View>
)

