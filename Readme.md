
## Content
<a name="top"/>

[1. QuestionnaireQuest](#qq)

[2. Initial Setup & Installation](#install)

[3. Components](#components)

[4. Api Guide](#api)

[5. Styling Guide](#styling)

[6. Lambdas: Question Generation Code](#lambdas)

[7. Team](#team)



<a  name="qq"/>

  

## 1. QuestionnaireQuest App

  

The application is a media rich branching questionnaire designed in React-Native. Three different types of questionnaire are supported: survey, quiz and game.   


<a  name="install"/>

  
[Back to top](#top)

## 2. Initial Setup & Installation

  

To test the application in the Emulator, set up Xcode / Android Studio per specified in [React Native Instruction](https://facebook.github.io/react-native/docs/getting-started  "React Native Getting Started").

  

*note*:

*Ensure to toggle to desired OS/Platforms options to view the corresponding setup instructions.*

  

### Creating a Host Application

  
  

To create new React-Native App: $react-native init <projectName>

  

Folders & Files needed:

  

- src (folder)

  

- package.json

  

- QuestionnaireQuest.js

  

To run the application in Android, create a local.properties file in the `android` folder. Then add a path to the Android sdk. You can find this path when navigating in Android studio to Tools | SDK Manager | System Settings | Android SDK. On a Mac the path looks like:

  

`sdk.dir=/Users/pm/Library/Android/sdk`

  

On Windows the path looks like:

  

`sdk.dir=C:\\Users\\XX\\AppData\\Local\\Android\\Sdk`

  

Be sure to save your local.properties file after making this change.

  

### Embedding the Child Application


**Folders & Files needed:**


- src (folder)

- QuestionnaireQuest.js


**Dependencies required in package.json include the following:**
```
  "dependencies": {
    "lodash": "^4.17.11",
    "prop-types": "^15.7.2",
    "react-native-autoheight-webview": "^1.0.1",
    "react-native-autoreheight-webview": "^1.1.1",
    "react-native-gesture-handler": "^1.1.0",
    "react-native-vector-icons": "^6.4.2",
    "react-native-elements": "^1.1.0",
    "react-native-webview": "^5.8.1"
  },
```


1. After copying the src folder and QuestionnaireQuest.js to the project root,
open your project's package.json


2. Compare and copy missing dependencies from the list above


3. `$ npm install`  


4. `$ react-native link react-native-gesture-handler` (at project root)


5. `$ react-native link react-native-vector-icons` (at project root)


6. `$ react-native run-ios** OR **react-native run-android` (builds app)


### Embedding the Component
To embed the component you must return the <QuestionnairQuest> tag by itself.
```
import React, {Component} from 'react';
import QuestionnaireQuest from './QuestionnaireQuest';
export default class App extends Component {
  render() {
    return (
        <QuestionnaireQuest></QuestionnaireQuest>
    );
  }
}
```

### Common Errors at Initial Setup:

  

If “Material Icon” error (“Unrecognized front family ‘Material Icons”) in IOS or if styling library does not implement in Android:

  
  

1. Run `\$react-native link react-native-vector-icons` , then build project again `$react-native run-ios` (at project root)

  

*OR*

  

2. Delete Items inside of build folder ( iOS > build ), rebuild project `$react-native run-ios` or `$react-native run-android`

  

<a  name="components"/>

[Back to top](#top)  

## 3. Components

  
#### AnswerCorrectIncorrect PropTypes
|Name | Type | Description|
|:---|---|:---|
correctAnswer | object | Correct answer associated with currently selected question
saveAnswerSelection | func | function called to save answer, triggered when next button is pressed
selectedAnswer | array | currently selected answer

#### GameAnswer PropTypes
|Name | Type | Description|
|:---|---|:---|
onExitButtonPush | func | Called when the exit button is pressed
questionnaire | array | Questionnaire choices

#### Index PropTypes
|Name | Type | Description|
|:---|---|:---|
fetchQuestionnaire | func | Callback to retrieve the filtered questionnaires
onPickerValueChange | func | Callback to update the category state
questionnaires | array | Array containing the queried questionnaires
selectedQuestionnaireId | number | Primary key of the selected questionnaire
type | string | Sting containing the questionnaire category
updateSelectedQuestionnaireId | func | Callback to update the chosen questionnaire id


#### Outcome PropTypes
|Name | Type | Description|
|:---|---|:---|
isLoading | bool | Correct answer associated with the currently active question
saveAnswerSelection | func | Function called to save the answer selection, triggered when the next button is pressed
selectedAnswer | array | Currently selected answer

#### Question PropTypes
|Name | Type | Description|
|:---|---|:---|
answers | array | Answers associated with the currently active question
checkAnswer | func | Function called when an answer is submitted using the the button
correctAnswer | object | Correct answer in case the type of questionnaire is a quiz
modalVisible | bool | Controls whenever the modal containing the correct/incorrect selection is visible
question | array | Currently active question
saveAnswerSelection | func | Function used to submit the answer selection, updating the currently active question and answers
selectAnswer | func | Function called when an answer is picked from the list
selectedAnswer | array | Currently selected answer


#### QuestionnaireList PropTypes
|Name | Type | Description|
|:---|---|:---|
onSelect | func | Callback to update the category state
questionnaires | array | Array containing the queried questionnaires
selectedQuestionnaireId | number | Primary key of the selected questionnaire

#### QuestionnaireType PropTypes
|Name | Type | Description|
|:---|---|:---|
onExitButtonPress | func | Called when the exit button is pressed

#### Quiz Results PropTypes
|Name | Type | Description|
|:---|---|:---|
onExitButtonPress | func | Called when the exit button is pressed

#### SurveyResults PropTypes
|Name | Type | Description|
|:---|---|:---|
onExitButtonPress | func | Function to be called when the exit button is pressed
resultsText | string | Text to display|


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
|selectedQuestionnaireID | int | Index of currently selected questionnaire|
|selectedQuestionaireTitle | string | Title of currently selected questionnaire|
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
|id|number|Id of the questionnaire|
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
|id|number|Id of the question|
|content|string|Text of the answer|
|isMultiple|boolean (optional)|For questionnaires of the type "survey", this property determines if multiple answers can be selected|
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
|id|number|Id of the answer|
|content|string|Text of the answer|
|parentQuestion|number|Id of the question this answers belongs to|
|childQuestion|number|Id of the questions this answers leads to. If the value is -1 this means that the answer is the last of the questionnaire|
|outcome|string (optional)|Text that explains what happens when selecting this answer. Used if the questionnaire type is "game"|

  

#### Answer JSON example:

  

```javascript

{

id: 2,

content: "Answer content",

parentQuestion: 2,

childQuestion: 3

}

```



[Back to top](#top) 

<a name="styling"/>

## 5. Styling Guide

The styling of the functional components is handled by having one style file for each functional component file. These style files are located inside the src/styles folder and the name of each file is the same as the name of its corresponding component.

[Back to top](#top) 

<a name="lambdas"/>

## 6. Lambdas for Backend Question Generation
a) 
DynamoDB_Answers_Read

```javascript

const AWS       = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-2'});
exports.handler  = function(e, ctx, callback) 
{
	let scanningParameters = 
	{
		TableName: 'Answers',
		Limit: 100
	}
	docClient.scan(scanningParameters, function(err, data) 
	{
		if(err) 
		{
			callback(err,null);
		}
		else 
		{
			callback(null, data);
		}
	});   
}

```

b) 
DynamoDB_Answers_Read_ById
```javascript

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-2'});
const table = "Answers";
var error = null;
exports.handler  = function(e, ctx, callback) 
{
	if ( !e.id || e.id == undefined || e.id == "" || e.id == 0 || e.id <= 0 )
	{
		error = new Error("You must supply a number > 0 for the id of the answers");
		callback(error);
	}
	else
	{
		if ( e.id > 0)
		{
			let newid = parseInt(e.id);
			let scanningParameters = 
			{
				TableName: table,
				FilterExpression : 'id = :this_id',
				ExpressionAttributeValues : {':this_id' : newid}
			}
			docClient.scan(scanningParameters, function(err, data) 
			{
				if(err) 
				{
					callback(err,null);
				}
				else 
				{
					callback(null, data);
				}
			}); 
		}
		else
		{
			error = new Error("You must supply a number > 0 for the id of the answers");
			callback(error);
		}
	}
}

```

c) 
Dynamo_Answers_Read_ByParentId
```javascript

const AWS       = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-2'});
const table = "Answers";
var error = null;

exports.handler  = function(e, ctx, callback) 
{
    if ( !e.parentQuestion || e.parentQuestion == undefined || e.parentQuestion == "" || e.parentQuestion == 0 || e.parentQuestion <= 0 )
    {
        error = new Error("You must supply a number > 0 for the parentQuestion of the answer");
        callback(error);
    }
    else
    {
        if ( e.parentQuestion > 0)
        {
            let newid = parseInt(e.parentQuestion);
            let scanningParameters = 
            {
                TableName: table,
                FilterExpression : 'parentQuestion = :this_id',
                ExpressionAttributeValues : {':this_id' : newid}
            }
            docClient.scan(scanningParameters, function(err, data) 
            {
                if(err) 
                {
                    callback(err,null);
                }
                else 
                {
                    callback(null, data);
                }
            }); 
        }
        else
        {
            error = new Error("You must supply a number > 0 for the parentQuestion of the answer");
            callback(error);
        }
    }
}

```

d) 
DynamoDB_Answers_write
```javascript

const AWS       = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-2'});
var error = null;
var table = "Answers";
exports.handler  = function(e, ctx, callback) 
{
    if ( !e.id || e.id == undefined || e.id == "" || e.id == 0 || e.id <= 0 )
    {
        error = new Error("You must supply a number > 0 for the id of the answer");
        callback(error);
    }
    else if (!e.content || e.content == undefined || e.content == "" || e.content.length <  1)
    {
        error = new Error("You must supply content with minimum of 1 letters");
        callback(error);
    }
    else if (!e.parentQuestion || e.parentQuestion == undefined || e.parentQuestion == "" || e.parentQuestion == 0 || e.parentQuestion <= 0)
    {
        error = new Error("You must supply a number > 0 for the parentQuestion of the answer");
        callback(error);
    }
    else if (!e.childQuestion || e.childQuestion == undefined || e.childQuestion == "" || e.childQuestion == 0 || e.childQuestion < -1)
    {
        error = new Error("You must supply a number > 0 for the childQuestion of the answer");
        callback(error);
    }
    else
    {
        if ( e.id > 0)
        {
            if ( e.parentQuestion > 0)
            {
                if ( e.childQuestion >= -1)
                {
                    var params = 
                    {
                        Item: 
                        {
                            id: e.id,
                            content: e.content,
                            parentQuestion: e.parentQuestion,
                            childQuestion: e.childQuestion,
                            outcome: e.outcome
                        },
                        TableName: table,
                        ConditionExpression: "attribute_not_exists(id)",
                        required: ["id"],
                        required: ["content"],
                        required: ["parentQuestion"],
                        required: ["childQuestion"]

                    };
   
                    docClient.put(params, function(err, data) 
                    {
                        if(err) 
                        {
                            callback(err,null);
                        }
                        else 
                        {
                            callback(null, params);
                        }
                    });   
                }
                else
                {
                    error = new Error("You must supply a number > 0 for the childQuestion of the answer");
                    callback(error);
                }
            }
            else
            {
                error = new Error("You must supply a number > 0 for the parentQuestion of the answer");
                callback(error);
            }
        }
        else
        {
            error = new Error("You must supply a number > 0 for the id of the answer");
            callback(error);
        }
    }
}

```

e) 
DynamoDB_Questionnaire_Read
```javascript

const AWS       = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-2'});

exports.handler  = function(e, ctx, callback) 
{
    let scanningParameters = 
	{
        TableName: 'Questionnaire',
        Limit: 100
    }
    
    docClient.scan(scanningParameters, function(err, data) 
	{
        if(err) 
		{
            callback(err,null);
        }
        else 
		{
            callback(null, data);
        }
    });   
}

```

f) 
DynamoDB_Questionnaire_Read_ById
```javascript

const AWS       = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-2'});
const table = "Questionnaire";
var error = null;

exports.handler  = function(e, ctx, callback) 
{
    if ( !e.id || e.id == undefined || e.id == "" || e.id == 0 || e.id <= 0 )
    {
        error = new Error("You must supply a number > 0 for the id of the questionnaire");
        callback(error);
    }
    else
    {
        if ( e.id > 0)
        {
            let newid = parseInt(e.id);
            let scanningParameters = 
            {
                TableName: table,
                FilterExpression : 'id = :this_id',
             ExpressionAttributeValues : {':this_id' : newid}
            }
            docClient.scan(scanningParameters, function(err, data) 
            {
                if(err) 
                {
                    callback(err,null);
                }
                else 
                {
                    callback(null, data);
                }
            }); 
        }
        else
        {
            error = new Error("You must supply a number > 0 for the id of the questionnaire");
            callback(error);
        }
    }
}

```

g) 
DynamoDB_Questionnaire_Read_ByType
```javascript

const AWS       = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-2'});
const table = "Questionnaire";
var error = null;
exports.handler  = function(e, ctx, callback) 
{
    if ( !e.questionnaireType || e.questionnaireType == undefined || e.questionnaireType == "" )
    {
        error = new Error("You must supply a valid questionnaireType of either quiz, game, or survey");
        callback(error);
    }
    else if (e.questionnaireType !== "game" && e.questionnaireType !== "quiz" && e.questionnaireType !== "survey")
    {
        error = new Error("You must supply a valid questionnaireType of either quiz, game, or survey");
        callback(error); 
    }
    else
    {
        let newtype = e.questionnaireType;
        let scanningParameters = 
        {
            TableName: table,
            FilterExpression : 'questionnaireType = :this_type',
            ExpressionAttributeValues : {':this_type' : newtype}
        }
        docClient.scan(scanningParameters, function(err, data) 
        {
            if(err) 
            {
                callback(err,null);
            }
            else 
            {
                callback(null, data);
            }
        });  
    }
}

```

h) 
DynamoDB_Questionnaire_Write
```javascript

const AWS       = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-2'});
var error = null;
exports.handler  = function(e, ctx, callback) 
{
	if ( !e.id || e.id == undefined || e.id == "" || e.id == 0 || e.id <= 0 )
	{
		error = new Error("You must supply a number > 0 for the id of the questionnaire");
		callback(error);
 	}
	else if ( !e.firstQuestionId || e.firstQuestionId == undefined || e.firstQuestionId == "" || e.firstQuestionId === 0 || e.firstQuestionId <= 0 )
	{
		error = new Error("You must supply a number > 0 for the first question id of the questionnaire");
		callback(error);
	}
	else if ( !e.title || e.title == undefined || e.title == "" || e.title.length <  10 )
	{
		error = new Error("You must supply a valid title for the questionnaire with a length of at least 10 characters");
		callback(error);
	}
	else if ( !e.desc || e.desc == undefined || e.desc == "" || e.desc.length <  10 )
	{
		error = new Error("You must supply a valid description for the questionnaire with a length of at least 10 characters");
		callback(error);
	}
	else if ( !e.questionnaireType || e.questionnaireType == undefined || e.questionnaireType == "")
	{
		error = new Error("You must supply a valid questionnaire type of either quiz, game, or survey");
		callback(error);
	}
	else if ( e.questionnaireType !== "game" && e.questionnaireType !== "quiz" && e.questionnaireType !== "survey")
	{
		error = new Error("You must supply a valid questionnaire type of either quiz, game, or survey");
		callback(error);
	}
	else
	{
		if (e.id > 0)
		{
			if ( e.firstQuestionId > 0)
			{
				if ( e.questionnaireType == "game")
				{
					if ( !e.endText || e.endText == undefined || e.endText == "" || e.endText.length <  3 )
					{
						error = new Error("You must supply a valid endText for the questionnaire with a length of at least 3 characters");
						callback(error);
					}
					else
					{
						var params = 
						{
							Item: 
							{
								id: e.id,
								title:   e.title,
								desc: e.desc,
								questionnaireType: e.questionnaireType,
								firstQuestionId: e.firstQuestionId,
								endText: e.endText
							},
							TableName: 'Questionnaire',
							ConditionExpression: "attribute_not_exists(id)",
							"required": ["id"],
							"required": ["title"],
							"required": ["desc"],
							"required": ["questionnaireType"],
							"required": ["firstQuestionId"],
							"required": ["endText"]
						};
						docClient.put(params, function(err, data) 
						{
							if(err) 
							{
								callback(err,null);
							}
							else 
							{
								callback(null, params);
							}
						}); 
					}
				}
				else
				{
					var params = 
					{
						Item: 
						{
							id: e.id,
							title:   e.title,
							desc: e.desc,
							questionnaireType: e.questionnaireType,
							firstQuestionId: e.firstQuestionId
						},
						TableName: 'Questionnaire',
						ConditionExpression: "attribute_not_exists(id)",
						"required": ["id"],
						"required": ["title"],
						"required": ["desc"],
						"required": ["questionnaireType"],
						"required": ["firstQuestionId"]
					};
					docClient.put(params, function(err, data) 
					{
						if(err) 
						{
							callback(err,null);
						}
						else 
						{
							callback(null, params);
						}
					}); 
				}
			}
			else
			{
				error = new Error("You must supply a number > 0 for the firstQuestionId of the questionnaire");
				callback(error);
			}
		}
		else
		{
			error = new Error("You must supply a number > 0 for the id of the questionnaire");
			callback(error);
		}
	}
}

```

i) 
DynamoDB_Questions_Quiz_Write
```javascript

const AWS       = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-2'});
var table = "Questions";
var error = null;

exports.handler  = function(e, ctx, callback) 
{
    if ( !e.id || e.id == undefined || e.id == "" || e.id == 0 || e.id <= 0 )
    {
        error = new Error("You must supply a number > 0 for the id of the question");
        callback(error);
    }
    else if ( !e.content || e.content == undefined || e.content == "" || e.content.length <  10 )
    {
        error = new Error("You must supply valid content for the question with a length of at least 10 characters");
        callback(error);
    }
    else if ( !e.correctAnswerId || e.correctAnswerId == undefined || e.correctAnswerId == "" || e.correctAnswerId == 0 || e.correctAnswerId <= 0 )
    {
        error = new Error("You must supply a number > 0 for the correctAnswwerId of the question");
        callback(error);
    }
    else
    {
        if (e.id > 0)
        {
            if (e.correctAnswerId > 0)
            {
                var params = 
                {
                    Item: 
                    {
                        id:   e.id,
                        content: e.content,
                        correctAnswerId: e.correctAnswerId,
                        mediaLink: e.mediaLink
                    },
                    TableName: table,
                    ConditionExpression: "attribute_not_exists(id)",
                    required: ["id"],
                    required: ["content"],
                    required: ["correctAnswerId"]
                };
                docClient.put(params, function(err, data) 
                {
                    if(err) 
                    {
                        callback(err,null);
                    }
                    else 
                    {
                        callback(null, params);
                    }
                }); 
            }
            else
            {
                error = new Error("You must supply a number > 0 for the correctAnswerId of the question");
                callback(error);
            }
        }
        else
        {
            error = new Error("You must supply a number > 0 for the id of the question");
            callback(error);
            
        }
    }
}

```

j) 
DynamoDB_Questions_Read
```javascript

const AWS       = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-2'});

exports.handler  = function(e, ctx, callback) 
{
    let scanningParameters = 
	{
        TableName: 'Questions',
        Limit: 100
    }
    docClient.scan(scanningParameters, function(err, data) 
	{
        if(err) 
		{
            callback(err,null);
        }
        else 
		{
            callback(null, data);
        }
    });   
}

```

k)
DynamoDB_Questions_ReadContent_ById
```javascript

const AWS       = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-2'});
const table = "Questions";
var error = null;
exports.handler  = function(e, ctx, callback) 
{
    if ( !e.id || e.id == undefined || e.id == "" || e.id == 0 || e.id <= 0 )
    {
        error = new Error("You must supply a number > 0 for the id of the question");
        callback(error);
    }
    else
    {
        if ( e.id > 0)
        {
            let newid = parseInt(e.id);
            let scanningParameters = 
            {
                TableName: table,
                ProjectionExpression : "content", 
                FilterExpression : 'id = :id',
                ExpressionAttributeValues : {':id' : newid}
            }
            docClient.scan(scanningParameters, function(err, data) 
            {
                if(err) 
                {
                    callback(err,null);
                }
                else 
                {
                    callback(null, data);
                }
            });   
        }
        else
        {
            error = new Error("You must supply a number > 0 for the id of the questionn");
            callback(error);
        }
    }
}

```

l)
DynamoDB_Questions_ReadCorrectAnswer_ById
```javascript

const AWS       = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-2'});
const table = "Questions";
var error = null;
exports.handler  = function(e, ctx, callback) 
{
    if ( !e.id || e.id == undefined || e.id == "" || e.id == 0 || e.id <= 0 )
    {
        error = new Error("You must supply a number > 0 for the id of the question");
        callback(error);
    }
    else
    {
        if ( e.id > 0)
        {
            let newid = parseInt(e.id);
            let scanningParameters = 
            {
                TableName: table,
                ProjectionExpression : "correctAnswerId", 
                FilterExpression : 'id = :id',
                ExpressionAttributeValues : {':id' : newid}
            }
            docClient.scan(scanningParameters, function(err, data) 
            {
                if(err) 
                {
                    callback(err,null);
                }
                else 
                {
                    callback(null, data);
                }
            });
        }
        else
        {
            error = new Error("You must supply a number > 0 for the id of the question");
            callback(error);
        }
    }
}

```

m)
DynamoDB_Questions_Read_ById
```javascript

const AWS       = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-2'});
const table = "Questions";
var error = null;
exports.handler  = function(e, ctx, callback) 
{
    if ( !e.id || e.id == undefined || e.id == "" || e.id == 0 || e.id <= 0 )
    {
        error = new Error("You must supply a number > 0 for the id of the question");
        callback(error);
    }
    else
    {
        if ( e.id > 0)
        {
            let newid = parseInt(e.id);
            let scanningParameters = 
            {
                TableName: table,
                FilterExpression : 'id = :this_id',
                ExpressionAttributeValues : {':this_id' : newid}
            }
            docClient.scan(scanningParameters, function(err, data) 
            {
                if(err) 
                {
                    callback(err,null);
                }
                else 
                {
                    callback(null, data);
                }
            });   
        }
        else
        {
            error = new Error("You must supply a number > 0 for the id of the question");
            callback(error);
        }
    }
}

```

n)
DynamoDB_Questions_Write
```javascript

const AWS       = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-2'});
var table = "Questions";
var error = null;

exports.handler  = function(e, ctx, callback) 
{
    if ( !e.id || e.id == undefined || e.id == "" || e.id == 0 || e.id <= 0 )
    {
        error = new Error("You must supply a number > 0 for the id of the question");
        callback(error);
    }
    else if ( !e.content || e.content == undefined || e.content == "" || e.content.length <  10 )
    {
        error = new Error("You must supply valid content for the question with a length of at least 10 characters");
        callback(error);
    }
    else
    {
        if (e.id > 0)
        {
            var params = 
            {
                Item: 
                {
                    id:   e.id,
                    content: e.content,
                    mediaLink: e.mediaLink
                },
                TableName: table,
                ConditionExpression: "attribute_not_exists(id)",
                required: ["id"],
                required: ["content"],
            };
            docClient.put(params, function(err, data) 
            {
                if(err) 
                {
                    callback(err,null);
                }
                else 
                {
                    callback(null, params);
                }
            }); 
        }
        else
        {
            error = new Error("You must supply a number > 0 for the id of the question");
            callback(error);
        }
    }
}

```

[Back to top](#top) 

<a name="team"/>

## 7. Team

<a href="https://github.com/c-ywj" target="_blank">**@c-wyj**</a>
<a href="https://github.com/ajadversalo" target="_blank">**@ajadversalo**</a>
<a href="https://github.com/sbeltran10" target="_blank">**@sbeltran10**</a>
<a href="https://github.com/Hollychin" target="_blank">**@Hollychin**</a>
<a href="https://github.com/GailGoncalves" target="_blank">**@GailGoncalves**</a>

[Back to top](#top) 
