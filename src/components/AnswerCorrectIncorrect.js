import React from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-elements';
import styles from '../styles/AnswerCorrectIncorrect';

let AnswerCorrectIncorrect = ({ saveAnswerSelection, selectedAnswer, correctAnswer = { content: 'There is no correct answer' } }) => (
  <View style={styles.mainView}>
    {correctAnswer.id === selectedAnswer[0].id ?
      <Text h4 styles={styles.correctHeaderText}>
        You selected the correct answer
      </Text>
      :
      <Text h4 style={styles.wrongHeaderText}>
        You selected the wrong answer
    </Text>
    }
    <View style={styles.choiceView}>
      <Text style={styles.choiceText}>
        Your choice:
      </Text>
      <Text style={[styles.choiceText, styles.textMarginBottom]}>
        {selectedAnswer[0].content}
      </Text>

      {correctAnswer.id !== selectedAnswer[0].id ?
        <>
          <Text style={styles.choiceText}>
            The correct choice was:
          </Text>
          <Text style={[styles.choiceText, styles.correctBackground]}>
            {correctAnswer.content}
          </Text>
        </>
        :
        <Text styles={[styles.choiceText, styles.choiceText]}>
          Good job!
        </Text>
      }
    </View>
    <Button
      onPress={saveAnswerSelection}
      title="Next"
    />
  </View>
)

export default AnswerCorrectIncorrect;