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
            <ScrollView stickyHeaderIndices={[1]}> 
                <View style={styles.todaysChallenge}>
                    <TodaysChallenge />
                </View>
                <View style = {styles.categoriesText}>
                    <Text style = {styles.text}>Categories</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        width: "100%"
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
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20
    },
    categoriesText: {
        width: "100%",
        paddingLeft: 20,
        marginTop: 20
    }
});
