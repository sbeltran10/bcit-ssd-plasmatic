import React from 'react';
import { View } from 'react-native';
import { Text, Button, ListItem, Overlay } from 'react-native-elements';
import styles from '../styles/Question';
import { ScrollView } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';
import Video from 'react-native-video';


const Question = ({ question, answers, selectAnswer, selectedAnswer, saveToSummary, modalVisible, selectedAnswerId }) => (
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
      onPress={() => {
          let step = "question";
          let qa = {q: question[0].content, a: selectedAnswer[0].content};
          saveToSummary(qa, step);
      }}
      title="Submit answer" 
    />
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

