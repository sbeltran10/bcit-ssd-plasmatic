import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'white'
  },
  questionView: {
    padding: 10
  },
  answersView: {
    flex: 1,
  },
  answerContainer: {
    backgroundColor: 'white'
  },
  answerContainerSelected: {
    backgroundColor: '#d8d8ff'
  },
  submitButton: {
    height: 50,
    borderRadius: 1
  }
})