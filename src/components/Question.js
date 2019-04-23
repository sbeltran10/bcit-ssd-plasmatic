import React from 'react';
import { Text, View } from 'react-native';
import { Button, ListItem } from 'react-native-elements';
import { RadioButton } from 'react-native-paper';
import styles from '../styles/main';


export default (props) => (
  <View style={styles.style1}>
    <Text>Question Screen</Text>
    <Text>Do you have any children?</Text>
    <Button title="Next" onPress={ () => { 
      let updateResults = props.navigation.getParam('updateResults');
      updateResults();
      } }/>
  </View>
)

