import React from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-elements';
import styles from '../styles/SurveyResults';
import PropTypes from 'prop-types';

/**
 * Simple component that displays a message when the last answer is submited on a questionnaire of the type survey
 */
let SurveyResults = ({ resultsText = "Thank you for finishing the survey!", onExitButtonPress }) => (
  <View style={styles.mainView}>
    <Text h3 style={styles.text}>
      {resultsText}
    </Text>
    <Button
      buttonStyle={styles.exitButton}
      onPress={onExitButtonPress}
      title="Exit" />
  </View>
)

SurveyResults.propTypes = {
  // Text to display
  resultsText: PropTypes.string,
  // Function to be called when the exit button is pressed
  onExitButtonPress: PropTypes.func
};

export default SurveyResults;

