import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

const SoundPlayer = ({ soundUri }) => {
    const [sound, setSound] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handlePlaySound = async () => {
        if (isPlaying || isLoading) {
            // Sound is already playing or loading, do nothing
            return;
        }

        try {
            setIsLoading(true);
            const { sound: audioSound } = await Audio.Sound.createAsync(
                { uri: soundUri },
                { shouldPlay: true }
            );
            setSound(audioSound);
            setIsPlaying(true);
            setIsLoading(false);
        } catch (error) {
            console.log('Error playing sound: ', error);
            setIsLoading(false);
        }
    };

    const handleStopSound = async () => {
        if (sound) {
            await sound.stopAsync();
            setIsPlaying(false);
        }
    };

    useEffect(() => {
        return () => {
            // Clean up the sound when the component unmounts
            if (sound) {
                sound.unloadAsync();
            }
        };
    }, []);

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.button, { backgroundColor: isPlaying ? '#ccc' : '#fff' }]}
                onPress={isPlaying ? handleStopSound : handlePlaySound}
                disabled={isLoading} // Disable the button while loading
            >
                <Text style={styles.buttonText}>{isPlaying ? 'Stop' : 'Play'}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        width: 100,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
});

export default SoundPlayer;
