import React from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-elements';

let AnswerCorrectIncorrect = ({ saveAnswerSelection, selectedAnswer, correctAnswer = { content: 'There is no correct answer' } }) => (
  <View>
    {correctAnswer.id === selectedAnswer[0].id ?
      <Text>
        You selected the correct answer
      </Text>
      :
      <Text>
        You selected the wrong answer
    </Text>
    }

    <Text>
      Your choice:
    </Text>
    <Text>
      {selectedAnswer[0].content}
    </Text>

    {correctAnswer.id !== selectedAnswer[0].id &&
      <>
        <Text>
          The correct choice was:
       </Text>
        <Text>
          {correctAnswer.content}
        </Text>
      </>
    }
    <Button
      onPress={saveAnswerSelection}
      title="Next"
    />
  </View>
)

export default AnswerCorrectIncorrect;