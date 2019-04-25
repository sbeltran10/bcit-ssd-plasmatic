import React, {Component} from 'react';
import {Text, View, Picker} from 'react-native';
// import styles from '../styles/QuestionnaireList';

export default (props) => (
    <View>
        <Picker mode="dropdown"
            // style={styles.title} 
            selectedValue={props.selectedValue} 
            onValueChange={(value, index) => props.onSelect(value)}>
            <Picker.Item label="Please select a category" value="0"></Picker.Item>
            <Picker.Item label="Survey" value="survey"></Picker.Item>
            <Picker.Item label="Quiz" value="quiz"></Picker.Item>
            <Picker.Item label="Game" value="game"></Picker.Item>
        </Picker>
    </View>
)