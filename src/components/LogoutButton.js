import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { signOut } from 'firebase/auth';
import auth from '../../firebase/auth';

const LogoutButton = () => {
    const handleLogout = async () => {
        try {
            await signOut(auth);
            // Additional logic after successful logout

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <TouchableOpacity style={styles.button} onPress={handleLogout} activeOpacity={0.8}>
            <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#007AFF',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default LogoutButton;
