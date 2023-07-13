import React from 'react';
import { SafeAreaView, View, StyleSheet, Text, ScrollView } from 'react-native';
import TodaysChallenge from '../components/TodaysChallenge';
import UserSummary from '../components/UserSummary';
import Categories from '../components/Categories';


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
                <Categories />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1e1e1e",
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
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: "#121212"
    },
    categoriesText: {
        width: "100%",
        paddingLeft: 20,
        paddingTop: 20,
        backgroundColor: "#121212"
    }
});
