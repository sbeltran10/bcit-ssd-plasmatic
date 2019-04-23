import React, { Component } from "react";
import { View, Text } from "react-native";
import { Button } from 'react-native-elements';
import styles from '../styles/IndexScreen';
import QuestionnaireList from '../components/QuestionnaireList';
import QuestionnairePicker from '../components/QuestionnaireType';

class IndexScreen extends Component {
    constructor (props) {
        super(props)
        this.state = {
            type: '', 
            list: [],
            id: 0
        }
    }

    onPickerValueChange=(value)=>{
        this.setState(
            {
                type:value
            },
            () => { this.setState({list:completeList.filter(q => { return q.type == this.state.type})}) }
        );
    }

    render(){

        return (
            <View style={styles.container}>
                <Text style={styles.title}>Questionnaire Selection</Text>
                <QuestionnairePicker 
                    selectedValue={this.state.type}
                    onSelect={(type)=>this.onPickerValueChange(type)}/>
                <QuestionnaireList 
                    list={this.state.list} 
                    onSelect={(id)=>this.setState({id:id})}/>          
                <Button style={styles.container}
                    title={"Start questionnaire " + this.state.id}
                    onPress={() => props.navigation.navigate('List')}/>  
            </View>
        )
    }
}

export default IndexScreen;

const completeList  = [
    {id: 1, type: "survey", title: "Housing Survey"},
    {id: 2, type: "survey", title: "Customer Satisfaction"},
    {id: 3, type: "survey", title: "Website Feedback"},
    {id: 4, type: "survey", title: "Employee Engagement"},
    {id: 5, type: "survey", title: "Brand Awareness"},
    {id: 6, type: "quiz", title: "General Information"},
    {id: 7, type: "quiz", title: "Science Trivia"},
    {id: 8, type: "quiz", title: "Recycling"},
    {id: 9, type: "quiz", title: "Financial Management"},
    {id: 10, type: "quiz", title: "Pet Ownership"},
    {id: 11, type: "game", title: "Game 1"},
    {id: 12, type: "game", title: "Game 2"},
    {id: 13, type: "game", title: "Game 3"},
    {id: 14, type: "game", title: "Game 4"},
    {id: 15, type: "game", title: "Game 5"},
]