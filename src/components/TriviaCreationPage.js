import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const TriviaCreationPage = () => {
    const [challengeName, setChallengeName] = useState('');
    const [categories, setCategories] = useState(['']);
    const [numQuestions, setNumQuestions] = useState('');
    const [questions, setQuestions] = useState([]);
    const [isLiveEvent, setIsLiveEvent] = useState(false);
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');

    const handleAddCategory = () => {
        setCategories([...categories, '']);
    };

    const handleCategoryChange = (index, value) => {
        const updatedCategories = [...categories];
        updatedCategories[index] = value;
        setCategories(updatedCategories);
    };

    const handleNumQuestionsChange = (value) => {
        setNumQuestions(value);
        const num = parseInt(value, 10) || 0;
        const updatedQuestions = Array(num).fill('').map((_, index) => ({
            question: '',
            answers: ['', '', '', ''],
            correctAnswer: -1,
        }));
        setQuestions(updatedQuestions);
    };

    const handleQuestionChange = (index, question) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index].question = question;
        setQuestions(updatedQuestions);
    };

    const handleAnswerChange = (questionIndex, answerIndex, answer) => {
        const updatedQuestions = [...questions];
        updatedQuestions[questionIndex].answers[answerIndex] = answer;
        setQuestions(updatedQuestions);
    };

    const handleCorrectAnswerChange = (questionIndex, answerIndex) => {
        const updatedQuestions = [...questions];
        updatedQuestions[questionIndex].correctAnswer = answerIndex;
        setQuestions(updatedQuestions);
    };

    const handleSubmit = () => {
        const isEveryQuestionAnswered = questions.every(
            (questionData) => questionData.correctAnswer !== -1
        );

        if (!isEveryQuestionAnswered) {
            console.log('Please select a correct answer for every question');
            return;
        }

        console.log('Challenge submitted!');
        console.log('Challenge Name:', challengeName);
        console.log('Categories:', categories);
        console.log('Number of Questions:', numQuestions);
        console.log('Questions:', questions);
        console.log('Is Live Event:', isLiveEvent);
        console.log('Start Time:', startTime);
        console.log('End Time:', endTime);
    };

    const renderCategories = () => {
        return categories.map((category, index) => (
            <TextInput
                key={index}
                style={styles.categoryInput}
                placeholder="Category"
                value={category}
                onChangeText={(value) => handleCategoryChange(index, value)}
            />
        ));
    };

    const renderQuestions = () => {
        return questions.map((questionData, index) => (
            <View key={index} style={styles.questionCard}>
                <Text style={styles.questionLabel}>Question #{index + 1}</Text>
                <TextInput
                    style={styles.questionInput}
                    placeholder="Enter your question"
                    value={questionData.question}
                    onChangeText={(question) => handleQuestionChange(index, question)}
                />
                <Text style={styles.answerLabel}>Answers:</Text>
                {questionData.answers.map((answer, answerIndex) => (
                    <View key={answerIndex} style={styles.answerContainer}>
                        <TextInput
                            style={styles.answerInput}
                            placeholder={`Answer ${answerIndex + 1}`}
                            value={answer}
                            onChangeText={(text) => handleAnswerChange(index, answerIndex, text)}
                        />
                        <TouchableOpacity
                            style={[
                                styles.correctButton,
                                questionData.correctAnswer === answerIndex && styles.correctButtonSelected,
                            ]}
                            onPress={() => handleCorrectAnswerChange(index, answerIndex)}
                            activeOpacity={0.8}
                        >
                            <Text style={styles.correctButtonText}>Correct</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
        ));
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Trivia Challenge Creation</Text>

            <Text style={styles.sectionLabel}>Challenge Name</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter challenge name"
                value={challengeName}
                onChangeText={setChallengeName}
            />

            <Text style={styles.sectionLabel}>Categories</Text>
            {renderCategories()}
            <TouchableOpacity style={styles.addButton} onPress={handleAddCategory} activeOpacity={0.8}>
                <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>

            <Text style={styles.sectionLabel}>Number of Questions</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter number of questions"
                keyboardType="numeric"
                value={numQuestions}
                onChangeText={handleNumQuestionsChange}
            />

            {renderQuestions()}

            <View style={styles.checkboxContainer}>
                <TouchableOpacity
                    style={[styles.checkbox, isLiveEvent && styles.checkboxSelected]}
                    onPress={() => setIsLiveEvent(!isLiveEvent)}
                    activeOpacity={0.8}
                />
                <Text style={styles.checkboxLabel}>Is Live Event</Text>
            </View>

            <Text style={styles.sectionLabel}>Start Time</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter start time"
                value={startTime}
                onChangeText={setStartTime}
            />

            <Text style={styles.sectionLabel}>End Time</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter end time"
                value={endTime}
                onChangeText={setEndTime}
            />

            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit} activeOpacity={0.8}>
                <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#333',
        paddingHorizontal: 20,
        paddingBottom: 40,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFF',
        marginTop: 20,
        marginBottom: 10,
    },
    sectionLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFF',
        marginTop: 20,
        marginBottom: 10,
    },
    input: {
        height: 40,
        backgroundColor: '#FFF',
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    categoryInput: {
        height: 40,
        backgroundColor: '#FFF',
        marginBottom: 10,
        paddingHorizontal: 10,
        marginTop: 5,
    },
    addButton: {
        backgroundColor: '#007AFF',
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginTop: 5,
        marginBottom: 10,
        width: 30,
        alignItems: 'center',
    },
    addButtonText: {
        color: '#FFF',
        fontSize: 20,
    },
    questionCard: {
        backgroundColor: '#FFF',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    questionLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    questionInput: {
        height: 40,
        backgroundColor: '#F2F2F2',
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    answerLabel: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    answerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    answerInput: {
        flex: 1,
        height: 40,
        backgroundColor: '#F2F2F2',
        marginRight: 10,
        paddingHorizontal: 10,
    },
    correctButton: {
        backgroundColor: '#EFEFEF',
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    correctButtonSelected: {
        backgroundColor: '#007AFF',
    },
    correctButtonText: {
        color: '#007AFF',
        fontSize: 14,
        fontWeight: 'bold',
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderRadius: 3,
        borderWidth: 2,
        borderColor: '#FFF',
        marginRight: 10,
    },
    checkboxSelected: {
        backgroundColor: '#007AFF',
        borderColor: '#007AFF',
    },
    checkboxLabel: {
        color: '#FFF',
        fontSize: 16,
    },
    submitButton: {
        backgroundColor: '#007AFF',
        borderRadius: 5,
        paddingVertical: 10,
        marginBottom: 10,
    },
    submitButtonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default TriviaCreationPage;
