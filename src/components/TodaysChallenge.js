import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'

export default function TodaysChallenge() {
    return (
      <TouchableOpacity style = {styles.container}>
        <View style = {styles.details} >
            <View>
                <Text style = {styles.time} >{challengeInfo.time}</Text>
            </View>
            <View style = {{flexDirection: "row", alignItems: "center"}}>
                <Image source={require("../../assets/rec.png")} style={{
                    width: 10,
                    height: 10,
                    resizeMode: "contain",
                }} />
                <Text style = {styles.text}>Live</Text>
            </View>
        </View>
        <View style = {{ alignItems: "center", padding: 10}}>
            <Text style = {{color: "rgb(240, 232, 252)", fontSize: 40, fontWeight: "bold"}}>{challengeInfo.title}</Text>
            <Image source={require("../../assets/focus.png")} style={{
                width: 100,
                height: 100,
                marginTop: 10,
                marginBottom: 10,
                resizeMode: "contain",
            }} />
        </View>
      </TouchableOpacity>
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
    }
})

const challengeInfo = {
    title: "Scavenger Hunt",
    time: "5:00 PM",
    entryFee: 10,
}