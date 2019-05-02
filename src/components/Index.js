import React, { Component } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { Button , Overlay} from 'react-native-elements';
import styles from '../styles/Index';
import QuestionnaireList from '../components/QuestionnaireList';
import QuestionnairePicker from '../components/QuestionnaireType';
import PropTypes from 'prop-types';

/**
 * This component is the initial page containing the sub components
 * which allows selection of the questionnaire category and questionnaires associated to it
 */
 
let Index = ({ questionnaires = [], 
               selectedQuestionnaireId, 
               type, 
               onPickerValueChange, 
               updateSelectedQuestionnaireId, 
               fetchQuestionnaire
            }) => (
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

Index.propTypes = {
    /** Array containing the queried questionnaires. */
    questionnaires: PropTypes.array,
    /** Primary key of the selected questionnaire. */ 
    selectedQuestionnaireId: PropTypes.number,
    /** String containing the questionnaire category. */ 
    type: PropTypes.string,
    /** callback to update the category state. */ 
    onPickerValueChange: PropTypes.func,
    /** callback to update the chosen questionnaire id. */ 
    updateSelectedQuestionnaireId: PropTypes.func,
    /** callback to retrieve the filtered questionnaires. */ 
    fetchQuestionnaire: PropTypes.func,
};

export default Index;
