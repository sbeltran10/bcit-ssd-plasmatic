import React from 'react';
import { View } from 'react-native';
import { Text, Button, ListItem, Overlay } from 'react-native-elements';
import styles from '../styles/main';
import { ScrollView } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';

const Question = ({ question, answers, selectAnswer, submitAnswer, modalVisible, selectedAnswerId }) => (
  <View style={styles.container}>
    <View>
      <Text h4>{question[0].content}</Text>
    </View>
    <View>
      <ScrollView style={{maxHeight: 100, borderWidth: 1, borderStyle: "solid"}}>
        {
          answers.map((answer, i) => (
            <ListItem
              key={i}
              leftIcon={selectedAnswerId === answer.id ?
                { name: 'radio-button-checked' }
                :
                { name: 'radio-button-unchecked' }}
              title={answer.content}
              onPress={() => selectAnswer(answer.id)}
              containerStyle={selectedAnswerId === answer.id ?
                styles.answerContainerSelected
                :
                styles.answerContainer
              }
            />
          ))
        }
      </ScrollView>
      <Button
        // containerStyle={styles.submitButton}
        onPress={submitAnswer}
        title="Submit answer" />
    </View>
    <Overlay
      isVisible={modalVisible}
      windowBackgroundColor="rgba(255, 255, 255, .5)"
      width="auto"
      height="auto"
    >
      <View></View>
    </Overlay>
  </View>
)

Question.propTypes = {
  question: PropTypes.array,
  answers: PropTypes.array,
  selectAnswer: PropTypes.func,
  submitAnswer: PropTypes.func,
  modalVisible: PropTypes.bool,
  selectedAnswerId: PropTypes.string
};

export default Question;

