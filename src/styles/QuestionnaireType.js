import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container:{
        flexDirection:"row",
        borderColor:'grey',
        borderWidth: 1,
        borderRadius: 5
    },  
      textContainer:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center' 
      },
      text:{
        fontSize:15
      },
      picker: {
        flex:2
     }
})