import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  mainView: {
    flex:1,
    justifyContent: 'space-between',
  },
  questionView: {
    padding: 20,
    borderBottomColor: '#84CFFF',
    borderBottomWidth: 2
  },
  answersView: {
    flex: 1
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center'
  },
  answerContainer: {
    backgroundColor: '#F5FCFF'
  },
  answerContainerSelected: {
    backgroundColor: '#84CFFF'
  },
  submitButton: {
    height: 50,
    borderRadius: 1
  }
})