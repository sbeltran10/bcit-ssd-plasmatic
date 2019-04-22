import React, { Component } from "react";
import { View, Text, Button, Picker } from "react-native";
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

    // onPickerValueChange=(value)=>{
    //     this.setState(
    //         {
    //             type:value
    //         },
    //         () => {
    //             switch(this.state.type){
    //                 case 'survey':
    //                     this.setState({list:surveyList});
    //                     break;
    //                 case 'quiz':
    //                     this.setState({list:quizList});
    //                     break;
    //                 case 'game':
    //                     this.setState({list:gameList});
    //                     break;
    //             }
    //         }
    //     );
    // }

    onPickerValueChange=(value)=>{
        this.setState(
            {
                type:value
            },
            () => {
                // switch(this.state.type){
                //     case 'survey':
                //         this.setState({list:surveyList});
                //         break;
                //     case 'quiz':
                //         this.setState({list:quizList});
                //         break;
                //     case 'game':
                //         this.setState({list:gameList});
                //         break;
                // }

                // newlist = completeList.filter(isOfType);
                // this.setState({list:newList});

                this.setState({list:completeList.filter(q => { return q.type == this.state.type})})
                
                //this.setState({list:newList});
            }
        );
    }

    isOfType(q){
        alert(this.state.type);
        if(q.type == this.state.type){
            return true;
        } else {
            return false;
        }
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
                <Button 
                    title={"Start questionnaire " + this.state.id}
                    onPress={() => props.navigation.navigate('List')}/>  
            </View>
        )
    }
}

export default IndexScreen;

const surveyList  = [
    {id: 1, title: "Housing Survey"},
    {id: 2, title: "Customer Satisfaction"},
    {id: 3, title: "Website Feedback"},
    {id: 4, title: "Employee Engagement"},
    {id: 5, title: "Brand Awareness"},
]

const quizList  = [
    {id: 6, title: "General Information"},
    {id: 7, title: "Science Trivia"},
    {id: 8, title: "Recycling"},
    {id: 9, title: "Financial Management"},
    {id: 10, title: "Pet Ownership"},
]

const gameList  = [ 
    {id: 11, title: "Game 1"},
    {id: 12, title: "Game 2"},
    {id: 13, title: "Game 3"},
    {id: 14, title: "Game 4"},
    {id: 15, title: "Game 5"},
]

const completeList  = [
    {id: 1, type:"survey", title: "Housing Survey"},
    {id: 2, type:"survey", title: "Customer Satisfaction"},
    {id: 3, type:"survey", title: "Website Feedback"},
    {id: 4, title: "Employee Engagement", type:"surveys"},
    {id: 5, title: "Brand Awareness", type:"survey"},
    {id: 6, title: "General Information", type:"quiz"},
    {id: 7, title: "Science Trivia", type:"quiz"},
    {id: 8, title: "Recycling"},
    {id: 9, title: "Financial Management"},
    {id: 10, title: "Pet Ownership"},
    {id: 11, title: "Game 1"},
    {id: 12, title: "Game 2"},
    {id: 13, title: "Game 3"},
    {id: 14, title: "Game 4"},
    {id: 15, type:"game", title: "Game 5"},
]