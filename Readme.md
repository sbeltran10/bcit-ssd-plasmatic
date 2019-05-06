## Content
<a name="top"/>

[1. Plasmatic Game App](#plasmatic)

[2. Initial Setup & Installation](#install)

[3. Components](#components)

[4. Api Guide](#api)

[5. Styling Guide](#styling)


<a  name="plasmatic"/>

  

## 1. Plasmatic Game App

  

The application is a branching survey game designed in React-Native.

  
  

### Project Description Requirement

  
  

We have the need for a very simple “game” like function in our app. It would be something as simple as a choose your own adventure or a scavenger hunt type app. It would be in React Native with maybe a React input that would allow the creation of the screens/path for the game.

  

<a  name="install"/>

  
[Back to top](#top)

## 2. Initial Setup & Installation

  

To test Application in Emulator, set up Xcode / Android studio per specified in [React Native Instruction](https://facebook.github.io/react-native/docs/getting-started  "React Native Getting Started").

  

*note*:

*Ensure to toggle to desired OS/Platforms options to view the corresponding setup instructions.*

  

### Creating a Host Application

  
  

To create new React-Native App: $react-native init <projectName>

  

Folders & Files needed:

  

- src (folder)

  

- package.json

  

- App.js

  

To run the application in Android, create a local.properties file in the android folder. Then add a path to the Android sdk. You can find this path when navigating in Android studio to Tools | SDK Manager | System Settings | Android SDK. On a Mac the path looks like:

  

`sdk.dir=/Users/pm/Library/Android/sdk`

  

On Windows the path looks like:

  

`sdk.dir=C:\\Users\\XX\\AppData\\Local\\Android\\Sdk`

  

Be sure to save your local.properties file after making this change.

  

### Embedding the Child Application

  

1. $ **npm install**

  

2. $ **react-native link react-native-gesture-handler** (at project root)

3. $ **react-native link react-native-vector-icons** (at project root)

  

4. $ **react-native run-ios** OR **react-native run-android** (builds app)

### Common Errors at Initial Setup:

  

If “Material Icon” error (“Unrecognized front family ‘Material Icons”) in IOS or if styling library does not implement in Android : :

  
  

1. Run **\$react-native link react-native-vector-icons** , then build project again **$react-native run-ios** (at project root)

  

*OR*

  

2. Delete Items inside of build folder ( iOS > build ), rebuild project $react-native run-ios or $react-native run-android

  

<a  name="components"/>

[Back to top](#top)  

## 3. Components

  

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

[Back to top](#top)  

<a  name="api"/>



## 4. API Guide:

  

This React Native Component utilizes 3 different API function containers to fetch the appropriate Questionnaire(Survey, Quiz) or Choose Your Own Adventure game. The files for each container are located inside the `src/api` folder. For the components to work correctly, the API functions should return JavaScript objects of the following type to the main `app.js` container via callbacks.

  

### QuestionnaireAPI

  

|Property |Type | Description|
|:---|---|:---|
|id|Number|Id of the questionnaire|
|title|string|Title text that appears on the intro screen|
|desc|string|Detailed description of the questionnaire|
|questionnaireType|string|Can be one of the following: "survey", "quiz", "game"|
|firstQuestionId|number|Id of the first question to fetch when starting the questionnaire|
|endText|string (optional)|Text that appears after the last question has been answered|

  

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

  

### QuestionAPI

  

|Property |Type | Description|
|:---|---|:---|
|id|Number|Id of the question|
|content|string|Text of the answer|
|correctAnswerId|number (optional)|Id of the correct answer if the questionnaire type is "quiz"|
|mediaLink|string (optional)|Link pointing to any multimedia the question is associated with. Can be a video, image or audio|

  

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
### AnswerAPI

    

|Property |Type | Description|
|:---|---|:---|
|id|Number|Id of the answer|
|content|String|Text of the answer|
|parentQuestion|Number|Id of the question this answers belongs to|
|childQuestion|Number|Id of the questions this answers leads to. If the value is -1 this means that the answer is the last of the questionnaire|
|outcome|String (optional)|Text that explains what happens when selecting this answer. Used if the questionnaire type is "game"|

  

#### Answer JSON example:

  

```javascript

{

id: 2,

content: "Answer content",

parentQuestion: 2,

childQuestion: 3

}

```

<a  name="styling"/>

[Back to top](#top)  

## 5. Styling Guide
