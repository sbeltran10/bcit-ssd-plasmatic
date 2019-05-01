Plasmatic Game App
The application is a branching survey game designed in React-Native. 

Project Description Requirement
We have the need for a very simple “game” like function in our app.  It would be something a simple as a choose your own adventure or a scavenger hunt type app.  It would be in React Native with maybe a React input that would allow the creation of the screens/path for the game.

Instructions
To test Application in Emulator, set up Xcode / Android studio per specified in React Native Instruction (https://facebook.github.io/react-native/docs/getting-started)

<!---
   Creating a Host Application          
-->
To create new React-Native App: $react-native init <projectName>

Folders & Files needed:

- src
- package.json
- App.js

To run the application in Android, create a local.properties file in the android folder. Then add a path to the Android sdk. You can find this path when navigating in Android studio to Tools | SDK Manager | System Settings | Android SDK:

    sdk.dir=/Users/pm/Library/Android/sdk

/****************************************/
/* Embedding the Child Application      */
/****************************************/
1. Run $npm install (at project root)

2. Run $react-native link react-native-gesture-handler (at project root)

3. Run $react-native run-ios OR react-native run-android


******

If “Material Icon” error or if styling library does not implement :

1. run $react-native link react-native-vector-icons

(at project root)

OR

2. Delete Items inside of build folder ( iOS > build ), rebuild project $react-native run-ios or $react-native run-android
