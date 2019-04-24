import React from 'react';
import { View } from 'react-native';
import { Text, Button, ListItem, Overlay } from 'react-native-elements';
import styles from '../styles/Question';
import { ScrollView } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';

const Question = ({ question, answers, selectAnswer, submitAnswer, modalVisible, selectedAnswerId }) => (
  <View style={styles.mainView}>
    <View>
      <Text h4>{question.content}</Text>
    </View>
    <View>
      <ScrollView>
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
        containerStyle={styles.submitButton}
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
  question: PropTypes.object,
  answers: PropTypes.array,
  selectAnswer: PropTypes.func,
  submitAnswer: PropTypes.func,
  modalVisible: PropTypes.bool,
  selectedAnswerId: PropTypes.string
};

export default Question;

