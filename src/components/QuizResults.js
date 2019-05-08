
import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Text, Button } from 'react-native-elements';
import styles from '../styles/QuizResults';
import PropTypes from 'prop-types';

const QuizResults = ({ quizTitle, countCorrect, totalCountOfQuestions, quizResults, onExitButtonPress }) => (
  <View>
    <Text h2 style={styles.title}>{this.props.quizTitle}</Text>
    <Text h3>Score: {countCorrect}/{totalCountOfQuestions}</Text>
    <ScrollView>
      {quizResults.map((item, key) => (
        <View key={key} style={styles.item}>
          <Text key={key}>
            {item.questionText} {"\n"}
            Your Answer: {item.answerText} {"\n"}
            Is it correct?: {item.isRightWrong} {"\n"}
            Correct Answer if was Wrong: {item.correctAnswer}
          </Text>
        </View>
      ))}
    </ScrollView>
    <Button
      containerStyle={styles.exitButton}
      onPress={onExitButtonPress}
      title="Exit" />

  </View>
);

QuizResults.propTypes = {
  quizTitle: PropTypes.string,
  countCorrect: PropTypes.number,
  totalCountOfQuestions: PropTypes.number,
  quizResults: PropTypes.array,
  onExitButtonPress: PropTypes.func
};
export default QuizResults;
