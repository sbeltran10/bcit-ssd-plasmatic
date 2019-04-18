import React from 'react';
import { Text, View } from 'react-native';
import { Button, ListItem } from 'react-native-elements';
import styles from '../styles/main';


export default (props) => (
  <View style={styles.style1}>
    <Text>List Screen</Text>
    <Button title="Select" onPress={() => props.navigation.navigate('Questionnaire')}/>
  </View>
)

