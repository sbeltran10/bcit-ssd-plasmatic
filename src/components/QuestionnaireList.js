import React, {Component} from 'react';
import {Text, View, ScrollView} from 'react-native';
import {ListItem} from 'react-native-elements';
import styles from '../styles/QuestionnaireList';

export default (props) => (
    <View style={styles.listContainer}>
        <ScrollView>
            {
             props.questionnaires.map((item) => (
                <ListItem 
                    key = {item.id} 
                    title={item.title}
                    onPress={ ()=> props.onSelect(item.id) }
                    containerStyle={props.selectedQuestionnaireId === item.id ?
                        styles.questionnaireContainerSelected
                        :
                        styles.questionnaireContainer
                    }    
                />
            ))
            }
        </ScrollView>
    </View>
)