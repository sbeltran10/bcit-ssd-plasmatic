import { StyleSheet } from 'react-native';

export default StyleSheet.create({  
    mainView: {
      flex:1,
      justifyContent: 'space-between',
    },
      items: {
        fontSize: 20,
        textAlign: 'center'
      },
      item: {
        fontSize: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        margin: 2,
        
     },
     exitButton: {
      height: 50,
      borderRadius: 1
    }
    })