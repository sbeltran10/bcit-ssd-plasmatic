import React, {Component} from 'react';
import {Text, View, Picker} from 'react-native';
import styles from '../styles/QuestionnaireType';

export default (props) => (
    <View style={styles.container}>
        <View style={styles.textContainer}>
            <Text style={styles.text}>Category:</Text>
        </View>
        <Picker mode="dropdown" 
            style={styles.picker}
            selectedValue={props.selectedValue} 
            onValueChange={(value, index) => props.onSelect(value)}>
            <Picker.Item label="Select" value="0"></Picker.Item>
            <Picker.Item label="Survey" value="survey"></Picker.Item>
            <Picker.Item label="Quiz" value="quiz"></Picker.Item>
            <Picker.Item label="Game" value="game"></Picker.Item>
        </Picker>
    </View>
)