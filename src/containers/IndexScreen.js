import React, { Component } from "react";
import { View, Text, Button, Picker } from "react-native";
import styles from '../styles/IndexScreen';
import QuestionnaireList from '../components/QuestionnaireList';

class IndexScreen extends Component {
    constructor (props) {
        super(props)
        this.state = {
            type: 'survey', 
            list: surveyList,
            id:0
        }
    }

    onPickerValueChange=(value)=>{
        this.setState(
            {
                type:value
            },
            () => {
                switch(this.state.type){
                    case 'survey':
                        this.setState({list:surveyList});
                        break;
                    case 'quiz':
                        this.setState({list:quizList});
                        break;
                    case 'game':
                        this.setState({list:gameList});
                        break;
                }
            }
        );
    }

    render(){

        return (
            <View style={styles.container}>
                <Text style={styles.title}>Questionnaire Selection</Text>
                <Picker 
                    style={styles.title} 
                    selectedValue={this.state.type} 
                    onValueChange={(value, index) => this.onPickerValueChange(value)}>
                    <Picker.Item label="Survey" value="survey"></Picker.Item>
                    <Picker.Item label="Quiz" value="quiz"></Picker.Item>
                    <Picker.Item label="Game" value="game"></Picker.Item>
                </Picker>
                <QuestionnaireList 
                    list={this.state.list} 
                    onSelect={(id) => this.setState({id:id})}
                />          
                <Button 
                    title={"Start questionnaire " + this.state.id}
                    onPress={() => this.props.navigation.navigate('List')}
                />  
            </View>
        )
    }
}

export default IndexScreen;

const surveyList  = [
    {id: 1, title: "Survey 1"},
    {id: 2, title: "Survey 2"},
    {id: 3, title: "Survey 3"},
    {id: 4, title: "Survey 4"},
    {id: 5, title: "Survey 5"},
]

const quizList  = [
    {id: 6, title: "Quiz 1"},
    {id: 7, title: "Quiz 2"},
    {id: 8, title: "Quiz 3"},
    {id: 9, title: "Quiz 4"},
    {id: 10, title: "Quiz 5"},
]

const gameList  = [
    {id: 11, title: "Game 1"},
    {id: 12, title: "Game 2"},
    {id: 13, title: "Game 3"},
    {id: 14, title: "Game 4"},
    {id: 15, title: "Game 5"},
]