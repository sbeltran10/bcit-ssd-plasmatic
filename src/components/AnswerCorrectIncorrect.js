import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Text, Button } from 'react-native-elements';
import styles from '../styles/AnswerCorrectIncorrect';
import PropTypes from 'prop-types';

/**
 * This component shows whenever a right or wrong answer was selected when the questionnaire type is quiz
 */
let AnswerCorrectIncorrect = ({ saveAnswerSelection, selectedAnswer, correctAnswer = { content: 'There is no correct answer' }, isLoading }) => (
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
      {/* Display the correct answer in addition to the selected answer if the selected answer is wrong */}
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
        <Text style={[styles.choiceText]}>
          Good job!
        </Text>
      }
    </View>

    <Button
      onPress={saveAnswerSelection}
      title="Next"
    />

    <View>
     <ActivityIndicator 
        animating={isLoading} size="small" 
        color="#00ff00" 
      />
    </View>
  </View>
)

AnswerCorrectIncorrect.propTypes = {
  // Function called to save the answer selection, triggered when the next button is pressed
  saveAnswerSelection: PropTypes.func,
  // Currently selected answer
  selectedAnswer: PropTypes.array,
  // Correct answer associated with the currently active question
  correctAnswer: PropTypes.object
}

export default AnswerCorrectIncorrect;