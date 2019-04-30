import React from 'react';
import { View } from 'react-native';
import { Text, Button, ListItem, Overlay } from 'react-native-elements';
import styles from '../styles/Question';
import { ScrollView } from 'react-native-gesture-handler';
import AnswerCorrectIncorrect from './AnswerCorrectIncorrect';
import PropTypes from 'prop-types';

let Question = ({ question, answers, selectAnswer, selectedAnswer, checkAnswer, saveAnswerSelection, modalVisible, correctAnswer }) => (
  <View style={styles.mainView}>
    <View style={styles.questionView}>
      <Text h4>{question[0].content}</Text>
    </View>
    <View style={styles.answersView}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {
          answers.map((answer, i) => (
            <ListItem
              key={i}
              leftIcon={selectedAnswer[0] && selectedAnswer[0].id === answer.id ?
                { name: 'radio-button-checked' }
                :
                { name: 'radio-button-unchecked' }}
              title={answer.content}
              onPress={() => selectAnswer(answer.id)}
              containerStyle={selectedAnswer[0] && selectedAnswer[0].id === answer.id ?
                styles.answerContainerSelected
                :
                styles.answerContainer
              }
            />
          ))
        }
      </ScrollView>
    </View>
    <Button
      buttonStyle={styles.submitButton}
      onPress={checkAnswer}
      title="Submit answer"
    />
    <Overlay
      isVisible={modalVisible}
      windowBackgroundColor="rgba(0, 0, 0, .7)"
      width='90%'
      height='80%'
    >
      <AnswerCorrectIncorrect
        saveAnswerSelection={saveAnswerSelection}
        question={question}
        selectedAnswer={selectedAnswer}
        correctAnswer={correctAnswer}
      />
    </Overlay>
  </View>
)

Question.propTypes = {
  question: PropTypes.array,
  answers: PropTypes.array,
  selectAnswer: PropTypes.func,
  saveAnswerSelection: PropTypes.func,
  modalVisible: PropTypes.bool,
  selectedAnswerId: PropTypes.string
};

export default Question;

