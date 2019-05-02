import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  mainView: {
    flex:1,
    justifyContent: 'space-between',
  },
  questionView: {
    padding: Platform.OS === 'ios' ? 50 : 20,
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
  mediaContainer: {
    flex:1
  },
  answerContainer: {
    backgroundColor: '#F5FCFF'
  },
  answerContainerSelected: {
    backgroundColor: '#84CFFF'
  },
  submitButton: {
    height: 50,
    borderRadius: 1,
    marginBottom: Platform.OS === 'ios' ? 30 : 0,
  }
})