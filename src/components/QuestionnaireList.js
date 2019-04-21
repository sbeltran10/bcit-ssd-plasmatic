import React, {Component} from 'react';
import {Text, View} from 'react-native';
import styles from '../styles/QuestionnaireList';

export default (props) => (
    <View style={styles.container}>
        {props.list.map((item, key) => (
            <Text style={styles.title} key={key} onPress={()=>(alert("Questionnaire id is: " +  item.id))}>{item.title}</Text>
        ))}
    </View>
)