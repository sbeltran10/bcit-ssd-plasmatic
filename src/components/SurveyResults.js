import React from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-elements';
import styles from '../styles/SurveyResults';
import PropTypes from 'prop-types';

const SurveyResults = ({ resultsText, onExitButtonPress }) => (
  <View style={styles.mainView}>
    <Text h3>
      {resultsText}
    </Text>
    <Button
        containerStyle={styles.exitButton}
        onPress={onExitButtonPress}
        title="Exit" />
  </View>
)

SurveyResults.defaultProps = {
  resultsText: "Thank you for fiishing the survey!"  
}

SurveyResults.propTypes = {
  resultsText: PropTypes.string,
  onExitButtonPress: PropTypes.func
};

export default SurveyResults;

