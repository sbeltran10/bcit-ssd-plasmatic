import React, {Component} from 'react';
import {Text, View, Picker} from 'react-native';
import styles from '../styles/QuestionnaireType';
import PropTypes from 'prop-types';

/**
 * This component populates a dropdown list containing the types of
 * surveys.
 */

let QuestionnaireType = ({selectedValue, onSelect}) => (
    <View style={styles.container}>
        <View style={styles.textContainer}>
            <Text style={styles.text}>Category:</Text>
        </View>
        <Picker mode="dropdown" 
            style={styles.picker}
            selectedValue={selectedValue} 
            onValueChange={(value, index) => onSelect(value)}>
            <Picker.Item label="Survey" value="survey"></Picker.Item>
            <Picker.Item label="Quiz" value="quiz"></Picker.Item>
            <Picker.Item label="Game" value="game"></Picker.Item>
        </Picker>
    </View>
)

QuestionnaireType.propTypes = {
    /** String containing the type of questionnaire. */
    selectedValue: PropTypes.number,
    /** callback to update the category state. */
    onSelect : PropTypes.func
}

export default QuestionnaireType;