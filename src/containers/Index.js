import React, { Component } from "react";
import { View, Text } from "react-native";
import { Button } from 'react-native-elements';
// import styles from '../styles/IndexScreen';
import QuestionnaireList from '../components/QuestionnaireList';
import QuestionnairePicker from '../components/QuestionnaireType';

class Index extends Component {

    render(){

        return (
            <View>
                <Text>Questionnaire Selection</Text>
                <QuestionnairePicker 
                    selectedValue={this.props.type}
                    onSelect={(type)=> {
                        let picker = this.props.onPickerValueChange;
                        picker(type);
                    }}
                />
                
                {
                    this.props.type !== '' &&
                    <QuestionnaireList 
                    questionnaires={this.props.questionnaires} 
                    onSelect={(id)=> {
                        let updater = this.props.updateSelectedQuestionnaireId;
                        updater(id);
                    }}/>        
                }
  
                <Button
                    title={"Start questionnaire " + this.props.selectedQuestionnaireId}
                    onPress={() => {
                        let step = 'intro';
                        // let updater = this.props.updateCurrentStep;
                        let fetchQuestionnaire = this.props.fetchQuestionnaire;
                        fetchQuestionnaire(step);
                        // updater(step);
                    }}/>  
            </View>
        )
    }
}

export default Index;
