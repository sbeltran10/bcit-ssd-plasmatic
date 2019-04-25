import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  mainView: {
    flex:1,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    backgroundColor: 'green',
  },
  questionView: {
    padding: 10,
    backgroundColor: 'yellow',
  },
  answersView: {
    backgroundColor: 'red',
    flex: 1
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center'
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