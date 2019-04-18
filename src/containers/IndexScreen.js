import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import styles from '../styles/IndexScreen';

class IndexScreen extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Questionnaire Selection</Text>
                <Button style={styles.button}>Survey</Button>
                <Button style={styles.button}>Quiz</Button>
                <Button style={styles.button}>Game</Button>
            </View>
        )
    }
}

export default IndexScreen;

