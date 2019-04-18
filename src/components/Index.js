import React from 'react';
import { Text, View } from 'react-native';
import { Button, ListItem } from 'react-native-elements';
import styles from '../styles/main';


export default (props) => (
  <View style={styles.style1}>
    <Text>Index Screen</Text>
    <Button title="Super Survey" onPress={() => props.navigation.navigate('List')}/>
  </View>
)

