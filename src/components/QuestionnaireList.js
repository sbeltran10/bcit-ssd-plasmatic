import React, {Component} from 'react';
import {Text, View} from 'react-native';
import styles from '../styles/QuestionnaireList';

export default (props) => (
    <View style={styles.listContainer}>
        {props.questionnaires.map((item, key) => (
            <Text
                style={styles.items}
                key={key} 
                onPress={()=>(props.onSelect(item.id))}>          
            {item.title}
        
            </Text>
        ))}
    </View>
)