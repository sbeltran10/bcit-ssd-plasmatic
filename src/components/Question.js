import React from 'react';
import { View } from 'react-native';
import { Text, Button, ListItem, Overlay } from 'react-native-elements';
import mainStyles from '../styles/main';
import styles from '../styles/Question';
import { ScrollView } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';

const Question = ({ question, answers, selectAnswer, selectedAnswer, saveToSummary, modalVisible, selectedAnswerId }) => (
  <View style={mainStyles.container}>
    <View>
      <Text h4>{question[0].content}</Text>
    </View>
    <View>
      <ScrollView style={{maxHeight: 150, borderWidth: 1, borderStyle: "solid"}}>
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
        onPress={ () => {
          let step = "question";
          let qa = {q: question[0].content, a: selectedAnswer[0].content};
          saveToSummary(qa, step);
          }
        }
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

