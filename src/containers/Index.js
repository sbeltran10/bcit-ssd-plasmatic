import React, { Component } from "react";
import { View, Text } from "react-native";
import { Button } from 'react-native-elements';
import styles from '../styles/Index';
import QuestionnaireList from '../components/QuestionnaireList';
import QuestionnairePicker from '../components/QuestionnaireType';

class Index extends Component {

    render(){

        return (
            <View >
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Questionnaire Selection</Text>
                </View>

                <View style={styles.contentContainer}>
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
                        onSelect={(id, title)=> {
                            let updater = this.props.updateSelectedQuestionnaireId;
                            let updateTitle = this.props.updateSelectedQuestionnaireTitle;
                            updater(id);
                            updateTitle(title);
                        }}/>        
                    }
                </View>
                
                <View style={styles.buttonContainer}>
                    <Button 
                        title={"Start " + this.props.title}
                        onPress={() => {
                            let step = 'intro';
                            let fetchQuestionnaire = this.props.fetchQuestionnaire;
                            fetchQuestionnaire(step);
                        }}/>  
                </View>
            </View>
        )
    }
}

export default Index;
