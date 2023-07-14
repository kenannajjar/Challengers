import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import auth from '../../firebase/auth';
import db from '../../firebase/database';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import UploadFileButton from '../components/UploadFileButton';


const SignUpPage = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignUp = async () => {
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            // TODO: How to know if both succeed or both fail? How to prevent partial failure (e.g. user created but not added to database)?

            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log("user created");

            // Additional logic after successful sign-up (e.g., user creation in a database)]
            // Add the user to the 'users' collection with the user id as the document id
            try {

                // Set the user data in the 'users' collection with the user ID as the document ID
                const userRef = doc(db, 'users', userCredential.user.uid);
                await setDoc(userRef, {
                    email: email,
                    username: username,
                    dateCreated: serverTimestamp(),
                    ribbits: 0
                });
                console.log("user added to database");
            }
            catch (error) {
                console.log('Error adding user to database:', error.message);
                throw error;
            }
        } catch (error) {
            setError(error.message);
        }

    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign Up</Text>

            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />

            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />

            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            <TextInput
                style={styles.input}
                placeholder="Re-enter Password"
                secureTextEntry
                value={confirmPassword}
                onChangeText={setConfirmPassword}
            />

            {/* <UploadFileButton /> */}

            {error ? <Text style={styles.error}>{error}</Text> : null}

            <TouchableOpacity
                style={styles.button}
                onPress={handleSignUp}
                activeOpacity={0.8}
            >
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFF',
        marginBottom: 20,
    },
    input: {
        height: 40,
        backgroundColor: '#FFF',
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: '#007AFF',
        borderRadius: 5,
        paddingVertical: 10,
        marginBottom: 10,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    error: {
        color: '#FF3B30',
        fontSize: 14,
        marginBottom: 10,
        textAlign: 'center',
    },
});

export default SignUpPage;
