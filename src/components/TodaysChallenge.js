import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'

export default function TodaysChallenge() {
    return (
        <View>
            <Text style={styles.labelText}>Today's Challenge</Text>
            <TouchableOpacity style={styles.container}>
                <View style={styles.details}>
                    <View>
                        <Text style={styles.time}>{challengeInfo.time}</Text>
                    </View>
                    <View style={styles.liveIndic}>
                        <Image source={require("../../assets/rec.png")} style = {styles.circle} />
                        <Text style={styles.text}>Live</Text>
                    </View>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.title}>{challengeInfo.title}</Text>
                    <Image source={require("../../assets/focus.png")} style={styles.buttonGraphic} />
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#6200EE',
        borderRadius: 20,
    },
    details: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    text: {
        color: "rgb(179, 138, 245)",
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 3,
        marginRight: 10,
        marginBottom: 10,
        marginTop: 10
    },
    time: {
        color: "rgb(179, 138, 245)",
        fontSize: 20,
        fontWeight: "bold",
        padding: 10
    },
    labelText: {
        color: 'white',
        fontSize: 27,
        fontWeight: "bold",
        marginBottom: 10
    },
    live: {
        width: 10,
        height: 10,
        resizeMode: "contain",
    },
    buttonGraphic:
    {
        width: 100,
        height: 100,
        marginTop: 10,
        marginBottom: 10,
        resizeMode: "contain",
    },
    liveIndic: {
        flexDirection: "row", 
        alignItems: "center" 
    },
    title: { 
        color: "rgb(240, 232, 252)", 
        fontSize: 40, 
        fontWeight: "bold" 
    },
    circle: {
        width: 10,
        height: 10
    },
    infoContainer: {
        alignItems: "center", 
        padding: 10
    }
})

const challengeInfo = {
    title: "Scavenger Hunt",
    time: "5:00 PM",
    entryFee: 10,
}