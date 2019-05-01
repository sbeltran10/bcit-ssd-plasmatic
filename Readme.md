
# Plasmatic Game App

The application is a branching survey game designed in React-Native.

  

## Project Description Requirement

  

We have the need for a very simple “game” like function in our app. It would be something as simple as a choose your own adventure or a scavenger hunt type app. It would be in React Native with maybe a React input that would allow the creation of the screens/path for the game.

  

  

### Initial Setup & Installation

  

To test Application in Emulator, set up Xcode / Android studio per specified in React Native Instruction (https://facebook.github.io/react-native/docs/getting-started)

  

  

To create new React-Native App: $react-native init <projectName>

  

  

Folders & Files needed:

  

  

- src (folder)

  

- package.json

  

- App.js

  

  

1. Run **$npm install** (at project root)

  

  

2. Run **$react-native link react-native-gesture-handler** (at project root)

  

  

3. Run **$react-native link react-native-vector-icons** (at project root)

  

  

4. Run **$react-native run-ios** OR **react-native run-android** (builds app)

  

  

******

  

#### Common Errors at Initial Setup:

  

If “Material Icon” error (“Unrecognized front family ‘Material Icons”) in IOS or if styling library does not implement in Android : :

  

1. Run **\$react-native link react-native-vector-icons** , then build project again **$react-native run-ios** (at project root)

  

*OR*

  

2. Delete Items inside of build folder ( iOS > build ), rebuild project $react-native run-ios or $react-native run-android

  
  
  

API:

  

This React Native Component utilizes 3 different API methods to fetch the appropriate Questionnaire(Survey, Quiz) or Choose Your Own Adventure game.

  

QuestionnaireAPI

  

QuestionAPI

  

AnswerAPI

  
  

Questionnaire JSON example:

  

```javascript
{

    id: 1,

    title: "Questionnaire Title",

    desc: "Questionnaire Description",

    questionnaireType: "survey"

    firstQuestionId: 2

}

  
  

Question JSON example:

  

Survey

{

    id: 1,

    content: "Question content"

}

  

Quiz

{

    id: 1,

    content: "Question content",

    correctAnswerId: 2

}

  

Answer JSON example:

{

    id: 1,

    content: "Answer content",

    parentQuestion: 2,

    childQuestion: 3

}```