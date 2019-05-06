import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  mainView: {
    flex: 1,
    width: '100%'
  },
  text: {
    flex: 1,
    textAlignVertical: "center",
    padding: Platform.OS === 'ios' ? 50 : 20,
  },
  exitButton: {
    height: 50,
    borderRadius: 1,
    marginBottom: Platform.OS === 'ios' ? 30 : 0,
  }
})