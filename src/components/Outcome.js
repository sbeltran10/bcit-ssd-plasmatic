import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Text, Button } from 'react-native-elements';
import styles from '../styles/AnswerCorrectIncorrect';
import PropTypes from 'prop-types';

/**
 * This component shows the out oucome of choosing an option in questionnaire of the type game
 */
let Outcome = ({ saveAnswerSelection, selectedAnswer, isLoading }) => (
  <View style={styles.mainView}>

    <View style={styles.choiceView}>
      <Text style={styles.choiceText}>
        Your choice: {selectedAnswer[0].content}
      </Text>
      <Text style={[styles.choiceText, styles.textMarginBottom]}>
        {selectedAnswer[0].outcome}
      </Text>
    </View>

    {!isLoading &&
      <Button
        onPress={saveAnswerSelection}
        title="Next"
      />
    }
    {isLoading &&
      <View>
        <ActivityIndicator
          animating={true}
          size="small"
          color="#0000ff"
        />
      </View>
    }
  </View>
)

Outcome.propTypes = {
  // Function called to save the answer selection, triggered when the next button is pressed
  saveAnswerSelection: PropTypes.func,
  // Currently selected answer
  selectedAnswer: PropTypes.array,
  // Correct answer associated with the currently active question
  isLoading: PropTypes.bool
}

export default Outcome;