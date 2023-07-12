import React from 'react';
import { SafeAreaView, View, StyleSheet, Text, ScrollView } from 'react-native';
import TodaysChallenge from '../components/TodaysChallenge';
import UserSummary from '../components/UserSummary';
import LogoutButton from '../components/LogoutButton';

export default function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topBar}>
                <UserSummary />
                <LogoutButton />
            </View>
            <ScrollView>
                <View style={styles.todaysChallenge}>
                    <TodaysChallenge />
                </View>
            </ScrollView>
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
        fontSize: 27,
        fontWeight: "bold",
        marginBottom: 5
    },
    topBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10
    },
    todaysChallenge: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20
    }
});
