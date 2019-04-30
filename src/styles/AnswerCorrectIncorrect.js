import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 5
  },
  correctHeaderText: {
    color: 'rgb(0, 153, 0)'
  },
  wrongHeaderText: {
    color: 'rgb(178,0,0)'
  },
  choiceText: {
    fontSize: 16,
    paddingVertical: 3,
    paddingHorizontal: 3
  },
  textMarginBottom:{
    marginBottom: 20
  },
  correctBackground: {
    backgroundColor: 'rgba(0, 153, 0, 0.3)'
  },
  wrongBackground: {
    backgroundColor: 'rgba(178,0,0, 0.3)'
  },
  choiceView: {
    justifyContent: 'center'
  }
})