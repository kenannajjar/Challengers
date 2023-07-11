import React from 'react';
import { SafeAreaView, View, StyleSheet, Text } from 'react-native';
import TodaysChallenge from '../components/TodaysChallenge';
import UserSummary from '../components/UserSummary';

export default function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <View style = {styles.topBar}>
                <UserSummary />
            </View>
            <View style = {{padding: 10}}>
                <Text style = {styles.text}>Today's Challenge</Text>
                <TodaysChallenge />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },
    text: {
        color: 'white',
        padding: 10,
        fontSize: 27,
        fontWeight: "bold"
    },
    topBar: {
        flexDirection: "row",
        marginLeft: 10,
        marginRight: 10
    }
});
