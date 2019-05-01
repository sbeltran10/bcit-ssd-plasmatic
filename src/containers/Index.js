import React, { Component } from "react";
import { View, Text } from "react-native";
import { Button } from 'react-native-elements';
import styles from '../styles/Index';
import QuestionnaireList from '../components/QuestionnaireList';
import QuestionnairePicker from '../components/QuestionnaireType';

/**
 * This component is the initial page containing the sub components
 * which select the questionnaire category and questionnaires associated to it
 */

let Index = ({questionnaires, selectedQuestionnaireId, type, title, onPickerValueChange, updateSelectedQuestionnaireId, fetchQuestionnaire}) => (
    <View >
        <View style={styles.titleContainer}>
            <Text style={styles.title}>Questionnaire Selection</Text>
        </View>

        <View style={styles.contentContainer}>
            <QuestionnairePicker
                selectedValue={type}
                onSelect={(type)=> { onPickerValueChange(type) }}
            />                  
            {
                type !== '' &&
                <QuestionnaireList
                    selectedQuestionnaireId = {selectedQuestionnaireId}
                    questionnaires={questionnaires} 
                    onSelect={(id, title)=> { updateSelectedQuestionnaireId(id, title) }}
                />        
            }
        </View>
        
        <View style={styles.buttonContainer}>
            <Button style={styles.button}
                title={"Start"}
                onPress={() => {
                    if(selectedQuestionnaireId > 0){
                        let step = 'intro';
                        fetchQuestionnaire(step);
                    }
                }}
            />  
        </View>
    </View>
)       
       
export default Index;
