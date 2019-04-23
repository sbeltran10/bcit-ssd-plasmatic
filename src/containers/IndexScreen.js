import React, { Component } from "react";
import { View, Text } from "react-native";
import { Button } from 'react-native-elements';
import styles from '../styles/IndexScreen';
import QuestionnaireList from '../components/QuestionnaireList';
import QuestionnairePicker from '../components/QuestionnaireType';

class IndexScreen extends Component {

    render(){

        return (
            <View style={styles.container}>
                <Text style={styles.title}>Questionnaire Selection</Text>
                <QuestionnairePicker 
                    updateType = {this.props.updateType}
                    selectedValue={this.props.type}
                    onSelect={(type)=> {
                        let picker = this.props.onPickerValueChange;
                        picker(type);
                    }}/>
                <QuestionnaireList 
                    questionnaires={this.props.questionnaires} 
                    onSelect={()=> {
                        let id = this.props.selectedQuestionnaireId;
                        let updater = this.props.updateSelectedQuestionnaireId;
                        updater(id);
                    }}/>          
                <Button style={styles.container}
                    title={"Start questionnaire " + this.props.selectedQuestionnaireId}
                    onPress={() => this.props.navigation.navigate('List')}/>  
            </View>
        )
    }
}

export default IndexScreen;
