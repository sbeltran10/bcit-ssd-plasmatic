import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'space-between',
  },
  titleDescView: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    paddingHorizontal: 20,
    paddingVertical: Platform.OS === 'ios' ? 50 : 20,
  },
  button: {
    height: 50,
    borderRadius: 1,
    marginBottom: Platform.OS === 'ios' ? 30 : 0,
  },
  desc: {
    paddingHorizontal: 20,
    fontSize: 16
  }
})