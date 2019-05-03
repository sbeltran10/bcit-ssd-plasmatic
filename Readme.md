hi

# Plasmatic Game App

The application is a branching survey game designed in React-Native.


## Project Description Requirement


We have the need for a very simple “game” like function in our app. It would be something as simple as a choose your own adventure or a scavenger hunt type app. It would be in React Native with maybe a React input that would allow the creation of the screens/path for the game.


### Initial Setup & Installation
  

To test Application in Emulator, set up Xcode / Android studio per specified in [React Native Instruction](https://facebook.github.io/react-native/docs/getting-started  "React Native Getting Started").

*note*
Ensure to toggle to desired OS/Platforms options to view the corresponding setup instructions.

  
## Creating a Host Application


To create new React-Native App: $react-native init <projectName>

Folders & Files needed:

- src (folder)

- package.json

- App.js
  

To run the application in Android, create a local.properties file in the android folder. Then add a path to the Android sdk. You can find this path when navigating in Android studio to Tools | SDK Manager | System Settings | Android SDK. On a Mac the path looks like:

sdk.dir=/Users/pm/Library/Android/sdk

On Windows the path looks like:  

sdk.dir=C:\\Users\\XX\\AppData\\Local\\Android\\Sdk

Be sure to save your local.properties file after making this change.

## Embedding the Child Application

1. $ **npm install**

2. $ **react-native link react-native-gesture-handler** (at project root)
  
3. $ **react-native link react-native-vector-icons** (at project root)

4. $ **react-native run-ios** OR **react-native run-android** (builds app)


******
  
#### Common Errors at Initial Setup:

If “Material Icon” error (“Unrecognized front family ‘Material Icons”) in IOS or if styling library does not implement in Android : :


1. Run **\$react-native link react-native-vector-icons** , then build project again **$react-native run-ios** (at project root)
  

*OR*
  

2. Delete Items inside of build folder ( iOS > build ), rebuild project $react-native run-ios or $react-native run-android


******


## API:


This React Native Component utilizes 3 different API methods to fetch the appropriate Questionnaire(Survey, Quiz) or Choose Your Own Adventure game.
  

QuestionnaireAPI

QuestionAPI

AnswerAPI


#### Questionnaire JSON example:
```javascript
{
    id: 1,
    title: "Survey Title",
    desc: "Survey Description",
    questionnaireType: "survey",
    firstQuestionId: 1
}
```

```javascript
{
    id: 2,
    title: "Quiz Title",
    desc: "Quiz Description",
    questionnaireType: "quiz",
    firstQuestionId: 2
}
```

```javascript
{
    id: 3,
    title: "Game Title",
    desc: "Game Description",
    questionnaireType: "game",
    firstQuestionId: 3
}
```

#### Question JSON example:
Survey Question:
```javascript
{
    id: 1,
    content: "Question content"
}
```
Quiz Question:
```javascript
{
    id: 2,
    content: "Question content",
    correctAnswerId: 2
}
```
#### Answer JSON example:
```javascript
{
    id: 2,
    content: "Answer content",
    parentQuestion: 2,
    childQuestion: 3
}
```

#### Question PropTypes

 |Name | Type | Description|
|:---|---|:---|
question | array | Currently active question
answers | array | Answers associated with the currently active question
selectAnswer | func | Function called when an answer is picked from the list
checkAnswer | func | Function called when an answer is submitted using the the button
saveAnswerSelection | func | Function used to submit the answer selection, updating the currently active question and answers
modalVisible | bool | Controls whenever the modal containing the correct/incorrect selection is visible
selectedAnswer | array | Currently selected answer
correctAnswer | object | Correct answer in case the type of questionnaire is a quiz

  
#### QuestionairreList PropTypes
 |Name | Type | Description|
|:---|---|:---|
questionnaires | array | Array containing the queried questionnaires
onSelect | func | Callback to update the category state
selectedQuestionnaireId | number | Primary key of the selected questionnaire
  

#### QuestionairreType PropTypes
 |Name | Type | Description|
|:---|---|:---|
onExitButtonPress | func | Called when the exit button is pressed

 
  #### **SurveyResults PropTypes**
 |Name | Type | Description|
|:---|---|:---|
resultsText | string | Text to display
onExitButtonPress | func | Function to be called when the exit button is pressed


#### State Variables
 |Name | Type | Description|
|:---|---|:---|
| answers | array | List of all the answers from the database |
|countCorrect | int | Total number of correct answers|
|currentStep | string | The name of the page to be rendered
| modalVisible | bool | Will determine if the question/answer result is displayed after an answer is submitted
| question | array | List of the questions
| questionnaire | array | Filtered list of questionnaires based on the type
|questionnaires|array | List of all questionnaires from the database|
|selectedAnswer | int | Index of the selected answer|
|selectedQuestionaireTitle | string | Title of currently selected questionnaire|
|selectedQuestionnaireID | int | Index of currently selected questionnaire|
|summary | array | Survey/quiz questions, result and correct answer|
|totalCountOfQuestions | int | Number of questions in a questionnaire
|type | string | Questionnaire category
