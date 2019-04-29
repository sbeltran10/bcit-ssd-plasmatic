
import React, { Component } from 'react';
import { View,ScrollView } from 'react-native';
import { Text, Button } from 'react-native-elements';
import styles from '../styles/QuizResults';
import PropTypes from 'prop-types';

class QuizResults extends Component {

  render() {
    return (
        <View>
           <Text h2>{this.props.quizTitle}</Text>
           <Text h3>Score: {this.props.countCorrect}/{this.props.totalCountOfQuestions}</Text>
           <ScrollView>
            {this.props.quizResults.map((item, key) => (
                <View key = {item.questionNumber} style = {styles.item}>
                    <Text key={key}>
                        {item.questionNumber}.{item.questionText} 
                        Your Answer: {item.answerText} 
                        Is it correct?: {item.isRightWrong}   
                        Correct Answer if was Wrong: {item.correctAnswer}    
                    </Text>
                </View>
            ))}
        </ScrollView>
        <Button
          containerStyle={styles.exitButton}
          onPress={this.props.onExitButtonPress}
        title="Exit" />
            
        </View>);
}
}
QuizResults.propTypes = {
  
  onExitButtonPress: PropTypes.func
};
export default QuizResults;



//const QuizResults = ({ title, onExitButtonPress, quizResults }) => (
//  <View style={styles.mainView}>
//    <View >
//      <Text h2>{title}</Text>
//    </View>
    
//    <Button
//      containerStyle={styles.exitButton}
//      onPress={onExitButtonPress}
//      title="Exit"  
//    />
   
//  </View>
//)

//QuizResults.propTypes = {
//  quizResults: PropTypes.array,
//  onExitButtonPress: PropTypes.func,
//  title: PropTypes.string
//};

//export default QuizResults;
