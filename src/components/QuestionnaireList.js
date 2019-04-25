import React, {Component} from 'react';
import {Text, View, ScrollView} from 'react-native';
import styles from '../styles/QuestionnaireList';

export default (props) => (
    <View>
        <ScrollView>
            {props.questionnaires.map((item, key) => (
                <View key = {item.id} style = {styles.item}>
                    <Text
                        key={key} 
                        onPress={()=>(props.onSelect(item.id, item.title))}>
                        {item.title}      
                    </Text>
                </View>
            ))}
        </ScrollView>
    </View>
)