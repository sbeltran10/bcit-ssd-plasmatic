import React from 'react';

import { FlatList, Text, View, Button} from 'react-native';
import styles from '../styles/QuizResults';

import PropTypes from 'prop-types';

const QuizResults = ({ title, correctCount, totalCount, finalQuizResults, onExitButtonPress   }) => (
  <View style={styles.mainView}>
    <View style={styles.titleView}>
      <Text h2>{title}</Text>
    </View>
    <View style={styles.titleView}>
      <Text h3>Score: {correctCount}/{totalCount}</Text>
    </View>
    <FlatList style={styles.tableView}>
        data=finalQuizResults
        keyExtractor={(x , i) => i}
        renderItem={({item}) => 
        <Text style={styles.item}>{`${item.number} ${item.answer} ${item.result}`}
        </Text>} 
    </FlatList>
    <Button
      buttonStyle={styles.submitButton}
      onPress={onExitButtonPress}
      title="Exit" 
    />
    </View>
)

QuizResults.propTypes = {
  title: PropTypes.string,
  correctCount: PropTypes.number,
  totalCount: PropTypes.number,
  finalQuizResults: PropTypes.array,
  onExitButtonPress: PropTypes.func
  
};

export default QuizResults;

