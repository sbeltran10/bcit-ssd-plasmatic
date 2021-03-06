/**
 * Plasmatic Game App
 * The application is a branching survey game designed in React-Native.
 * https://github.com/sbeltran10/bcit-ssd-plasmatic.git
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View } from "react-native";
import Index from './src/components/Index';
import Intro from './src/components/Intro';
import Question from './src/components/Question';
import SurveyResults from './src/components/SurveyResults';
import QuizResults from './src/components/QuizResults';
import GameResults from './src/components/GameResults';

import AnswerAPI from './src/api/AnswerAPI';
import QuestionnaireAPI from './src/api/QuestionnaireAPI';
import QuestionAPI from './src/api/QuestionAPI';

import styles from './src/styles/QuestionnaireQuest';


class QuestionnaireQuest extends Component {
  constructor (props) {
    super(props);
    this.state = {
      type: '',
      questionnaires: [],
      currentStep: "index",
      selectedQuestionnaireId: null,
      selectedQuestionnaireTitle: '',
      questionnaire: [],
      question: [],
      answers: [],
      correctAnswer: null,
      selectedAnswer: [],
      modalVisible: false,
      summary: [],
      totalCountOfQuestions: 0,
      countCorrect: 0,
      isLoading: false,
      mediaIsLoading: true
    }
  }

  componentWillMount () {
    this.onPickerValueChange('survey');
  }


  // call back for setState in onPickerValueChange
  fetchList = () => {
    QuestionnaireAPI.getByType(this.state.type, (err, data) => {
      let stateCopy = { ...this.state };
      if (err) console.log(err);
      stateCopy.questionnaires = data;
      this.setState(stateCopy);
    })
  }

  // updates type and populate questionnaire array with corresponding list of questionnaires
  onPickerValueChange = (type) => {
    let stateCopy = { ...this.state };
    stateCopy.type = type;
    // reset selected questionnaire to none everytime a new category is selected
    stateCopy.selectedQuestionnaireId = 0;
    this.setState(stateCopy, () => this.fetchList());
  }

  updateSelectedQuestionnaireId = (id, title) => {
    let stateCopy = { ...this.state };
    stateCopy.selectedQuestionnaireId = id;
    //title needed for the results page
    stateCopy.selectedQuestionnaireTitle = title;
    this.setState(stateCopy)
  }

  countCorrectAnswers () {
    let correctAnswers = 0;
    for (let i = 0; i < this.state.summary.length; i++) {
      if (this.state.summary[i].isRightWrong === 'correct') {
        correctAnswers += 1;
      }
    }
    return correctAnswers;
  }

  // used as callback @ fetchQuestionnaire, fetchAnswers
  updateCurrentStep = (step) => {
    let stateCopy = { ...this.state };
    stateCopy.currentStep = step;
    stateCopy.isLoading = false;
    this.setState(stateCopy);
  }

  // fetches first question based on selected survey
  fetchQuestionnaire = (step) => {
    let stateCopy = { ...this.state };
    stateCopy.questionnaire = stateCopy.questionnaires.filter(q => { return q.id === stateCopy.selectedQuestionnaireId });
    this.setState(stateCopy, () => { this.updateCurrentStep(step) })
  }

  updateLoadingFFQ = (step) => {
    let stateCopy = { ...this.state };
    stateCopy.isLoading = true;
    this.setState(stateCopy, () => { this.fetchFirstQuestion(step) })
  }

  updateMediaLoading = (value) => {
    let stateCopy = { ...this.state };
    stateCopy.mediaIsLoading = value;
    this.setState(stateCopy)
  }

  fetchFirstQuestion = (step) => {
    QuestionAPI.readById(this.state.questionnaire[0].firstQuestionId, (err, data) => {
      if (err) console.log(err);
      let stateCopy = { ...this.state };
      if (data.length === 0) {
        alert('No Questions Found! \n Please Select Again.');
        this.setState(stateCopy, () => { this.updateCurrentStep('index') })
      } else {
        stateCopy.question = data;
        this.setState(stateCopy, () => { this.fetchAnswers(step) });
      }
    })
  }


  /*-------------------------------methods for Question component----------------------------------------*/


  // used as callback @ fetchFirstQuestion, fetchQuestion 
  fetchAnswers = (step) => {
    AnswerAPI.getByParentId(this.state.question[0].id, (err, data) => {
      if (err) console.log(err);
      let stateCopy = { ...this.state };
      stateCopy.answers = data;
      this.setState(stateCopy, () => { this.updateCurrentStep(step) })
    })
  }

  fetchQuestion = (step) => {
    QuestionAPI.readById(this.state.selectedAnswer[0].childQuestion, (err, data) => {
      if (err) console.log(err);
      else {
        let stateCopy = { ...this.state };
        stateCopy.selectedAnswer = []

        if (!data && this.state.type === 'survey') {
          stateCopy.question = [];
          this.setState(stateCopy, () => { this.updateCurrentStep('results') });
        } else if (!data && this.state.type === 'quiz') {
          stateCopy.question = [];
          stateCopy.totalCountOfQuestions = this.state.summary.length;
          stateCopy.countCorrect = this.countCorrectAnswers();
          this.setState(stateCopy, () => { this.updateCurrentStep('quizResults') });
        } else if (!data && this.state.type === 'game') {
          stateCopy.question = [];
          this.setState(stateCopy, () => { this.updateCurrentStep('gameResults') });
        } else {
          stateCopy.question = data;
          this.setState(stateCopy, () => { this.fetchAnswers(step) });
        }
      }
    })
  }

  selectAnswer = (answer) => {
    stateCopy = { ...this.state };
    if (this.state.type === 'survey' && this.state.question[0].isMultiple) {
      const isSelected = this.state.selectedAnswer.find(a => a.id === answer.id)
      if (isSelected) {
        stateCopy.selectedAnswer.splice(stateCopy.selectedAnswer.indexOf(answer), 1)
      }
      else {
        stateCopy.selectedAnswer.push(answer)
      }
    }
    else {
      stateCopy.selectedAnswer = stateCopy.answers.filter(a => { return a.id === answer.id });
    }
    this.setState(stateCopy);
  }

  submitAnswer = (step) => {
    this.fetchQuestion(step);
  }

  checkAnswer = () => {
    if (this.state.selectedAnswer.length > 0) {
      if (this.state.type === 'quiz') {
        this.setState({
          modalVisible: true,
          correctAnswer: this.state.answers.find(a => { return this.state.question[0].correctAnswerId === a.id })
        })
      } else if (this.state.type === 'game' && this.state.selectedAnswer[0].outcome) {
        this.setState({
          modalVisible: true
        });
      } else {
        this.saveAnswerSelection();
      }
    }
  }

  saveAnswerSelection = () => {
    let step = "question";
    let result = '';
    let correctAnswer = '';

    if (this.state.selectedAnswer[0].id === this.state.question[0].correctAnswerId) {
      result = 'correct';
    } else {
      result = 'incorrect';
      //find and store correct answer
      for (let i = 0; i < this.state.answers.length; i++) {
        if (this.state.question[0].correctAnswerId === this.state.answers[i].id) {
          correctAnswer = this.state.answers[i].content;
        }
      }
    }

    let answerText
    if (this.state.question[0].isMultiple) {
      answerText = this.state.selectedAnswer.map(a => a.content)
    }
    else {
      answerText = this.state.selectedAnswer[0].content
    }

    const qa = {
      questionText: this.state.question[0].content,
      answerText: answerText,
      isRightWrong: result,
      correctAnswer: correctAnswer
    };
    let stateCopy = { ...this.state };
    stateCopy.isLoading = true;
    this.setState(stateCopy, () => { this.saveToSummary(qa, step) })
  }

  // qa(question & answer pair)
  saveToSummary = (qa, step) => {
    stateCopy = { ...this.state };
    stateCopy.summary.push(qa);
    stateCopy.modalVisible = false;
    this.setState(stateCopy, () => { this.submitAnswer(step) });
  }

  resetPicker (step) {
    let stateCopy = { ...this.state };
    stateCopy.currentStep = step;
    stateCopy.isLoading = false;
    this.setState(stateCopy, this.fetchList(this.state.type));
  }

  onExitButtonPress = () => {
    let step = 'index'
    let stateCopy = { ...this.state };
    stateCopy.type = '';
    stateCopy.summary = [];
    stateCopy.type = 'survey';
    stateCopy.modalVisible = false;
    this.setState(stateCopy, () => { this.resetPicker(step) })
  }

  /*---  render  ---*/


  render () {
    return (
      <View style={styles.container}>

        {/* ---index screen--- */}
        {
          this.state.currentStep === 'index' &&
          <Index
            questionnaires={this.state.questionnaires}
            selectedQuestionnaireId={this.state.selectedQuestionnaireId}
            type={this.state.type}
            title={this.state.title}

            onPickerValueChange={this.onPickerValueChange}
            updateSelectedQuestionnaireId={this.updateSelectedQuestionnaireId}
            fetchQuestionnaire={this.fetchQuestionnaire}
            question={this.state.question}
          />
        }

        {/* ---intro screen--- */}
        {
          this.state.currentStep === 'intro' &&
          <Intro
            updateCurrentStep={this.updateCurrentStep}
            questionnaire={this.state.questionnaire}
            fetchFirstQuestion={this.fetchFirstQuestion}
            updateLoadingFFQ={this.updateLoadingFFQ}
            isLoading={this.state.isLoading}
          />
        }

        {/* ---question screen--- */}
        {
          this.state.currentStep === 'question' && this.state.question.length !== 0 &&
          <Question
            question={this.state.question}
            answers={this.state.answers}
            selectedAnswerId={this.state.selectedAnswerId}
            selectedAnswer={this.state.selectedAnswer}
            selectAnswer={this.selectAnswer}
            checkAnswer={this.checkAnswer}
            saveAnswerSelection={this.saveAnswerSelection}
            fetchQuestion={this.fetchQuestion}
            modalVisible={this.state.modalVisible}
            correctAnswer={this.state.correctAnswer}
            isLoading={this.state.isLoading}
            type={this.state.type}
            mediaIsLoading={this.state.mediaIsLoading}
            mediaLoading={this.updateMediaLoading}
          />
        }

        {/* ---result screen--- */}
        {
          this.state.currentStep === 'results' && this.state.question.length === 0 &&
          <SurveyResults
            // saveToSummary={this.saveToSummary}
            onExitButtonPress={this.onExitButtonPress}
          />
        }
        {/* ---quiz result screen--- */}
        {
          this.state.currentStep === 'quizResults' && this.state.question.length === 0 &&
          <QuizResults
            quizTitle={this.state.selectedQuestionnaireTitle}
            totalCountOfQuestions={this.state.totalCountOfQuestions}
            countCorrect={this.state.countCorrect}
            quizResults={this.state.summary}
            onExitButtonPress={this.onExitButtonPress}
          />
        }

        {
          this.state.currentStep === 'gameResults' && this.state.question.length === 0 &&
          <GameResults
            questionnaire={this.state.questionnaire}
            onExitButtonPress={this.onExitButtonPress}
          />
        }

      </View>
    );
  }
}

export default QuestionnaireQuest;
