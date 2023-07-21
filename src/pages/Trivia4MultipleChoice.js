import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Trivia4MultipleChoice = () => {
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const question = 'What is the capital of France?';
    const correctAnswer = 3;
    const options = ['London', 'Berlin', 'Madrid', 'Paris'];

    const handleAnswerClick = (index) => {
        // If the user has not selected an answer yet, set the selected answer to the option they clicked
        if (selectedAnswer === null) {
            setSelectedAnswer(index);
        }
    };

    const getAnswerButtonStyle = (index) => {
        // If an answer has been selected, style all buttons based on whether they are correct or not
        if (selectedAnswer !== null) {
            if (index === correctAnswer) {
                return styles.correctAnswerButton;
            } else if (index === selectedAnswer) {
                return styles.wrongAnswerButton;
            }
        }
        return styles.answerButton;
    };

    return (
        <View style={styles.container}>
            <View style={styles.questionContainer}>
                <Text style={styles.questionText}>{question}</Text>
            </View>
            <View style={styles.optionsContainer}>
                {options.map((option, index) => (
                    <TouchableOpacity
                        key={index}
                        style={getAnswerButtonStyle(index)}
                        onPress={() => handleAnswerClick(index)}
                        disabled={selectedAnswer !== null}
                    >
                        <Text style={styles.optionText}>{option}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    questionContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        width: '100%',
        height: 200,
        borderRadius: 8,
        marginBottom: 20,
    },
    questionText: {
        fontSize: 18,
        textAlign: 'center',
    },
    optionsContainer: {
        width: '100%',
    },
    answerButton: {
        backgroundColor: '#e0e0e0',
        padding: 12,
        borderRadius: 8,
        marginBottom: 10,
    },
    correctAnswerButton: {
        backgroundColor: 'green',
        padding: 12,
        borderRadius: 8,
        marginBottom: 10,
    },
    wrongAnswerButton: {
        backgroundColor: 'red',
        padding: 12,
        borderRadius: 8,
        marginBottom: 10,
    },
    optionText: {
        fontSize: 16,
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default Trivia4MultipleChoice;
