import React from 'react';
import { View } from 'react-native';
import { Text, Button, ListItem } from 'react-native-elements';
import styles from '../styles/Question';
import { ScrollView } from 'react-native-gesture-handler';


export default ({ question, answers, selectAnswer, submitAnswer, modalVisible, selectedAnswerId }) => (
  <View style={styles.mainView}>
    <View>
      <Text h4>{question.content}</Text>
    </View>
    <View>
      <ScrollView>
        {
          answers.map((answer, i) => (
            <ListItem
              key={i}
              leftIcon={selectedAnswerId === answer.id ?
                { name: 'radio_button_checked' }
                :
                { name: 'radio_button_unchecked' }}
              title={item.title}
              onPress={() => selectAnswer(i)}
              containerStyle={selectedAnswerId === answer.id ?
                styles.answerContainerSelected
                :
                styles.answerContainer
              }
            />
          ))
        }
      </ScrollView>
      <Button
        containerStyle={styl}
        onPress={submitAnswer} >
        Submit answer
      </Button>
    </View>
    <Overlay
      isVisible={modalVisible}
      windowBackgroundColor="rgba(255, 255, 255, .5)"
      width="auto"
      height="auto"
    ></Overlay>
  </View>
)

