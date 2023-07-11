import React from 'react';
import { SafeAreaView, View, StyleSheet, Text, ScrollView } from 'react-native';
import TodaysChallenge from '../components/TodaysChallenge';
import UserSummary from '../components/UserSummary';

export default function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topBar}>
                <UserSummary />
            </View>
            <ScrollView>

                <View style={{ padding: 20 }}>
                    <Text style={styles.text}>Today's Challenge</Text>
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
        marginLeft: 10,
        marginRight: 10, 
        marginBottom: 10
    }
});
