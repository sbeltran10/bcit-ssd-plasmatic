import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  mainView: {
    flex:1,
    justifyContent: 'space-between',
    width: '100%'
  },
  questionSubView: {
    flex: 1,
    padding: Platform.OS === 'ios' ? 50 : 20,
    height: 50,
    justifyContent: 'center',
    borderBottomColor: '#84CFFF',
    borderBottomWidth: 2
  },
  subView: {
    flex: 1
  },
  answerScrollView: {
    flexGrow: 1,
    justifyContent: 'center'
  },
  questionScrollView: {
    flexGrow: 1,
    justifyContent: 'center',
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