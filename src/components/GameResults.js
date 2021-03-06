import React from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-elements';
import styles from '../styles/SurveyResults';
import PropTypes from 'prop-types';

let GameResults = ({questionnaire, onExitButtonPress}) => (
    <View style={{flex: 1, justifyContent: 'center', height: 100}}>
        <Text>{questionnaire[0].endText}</Text>
        <Button
            containerStyle={styles.exitButton}
            onPress={onExitButtonPress}
            title="Exit" 
        />
    </View>
);

GameResults.propTypes = {
    questionnaire: PropTypes.array,
    onExitButtonPress: PropTypes.func
};

export default GameResults;