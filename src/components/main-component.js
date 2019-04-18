import React from 'react';
import { Text, View } from 'react-native';
import { Button, ListItem } from 'react-native-elements';
import styles from '../styles/main';


export default (props) => (
  <View style={styles.style1}>
    <Text style={styles.style2}>{props.text}</Text>
    <Button
      title="Outline button"
      type="outline"
      raised
      containerStyle={styles.button}
    />
      />
    ))}
  </View>
)