import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

export default function UserSummary() {
    return (
        <View style = {styles.container}>
            <View style={styles.imageContainer}>
                <Image source={userInfo.profilePic} style={styles.image} />
            </View>
            <Text style = {styles.username}> {userInfo.firstName} </Text>
        </View>
    )
}

const userInfo = {
    firstName: "Kenan",
    lastName: "Najjar",
    username: "kenannajjar",
    email: "kenannajjar@berkeley.edu",
    profilePic: require("../../assets/kenan.jpg"),
    credits: 100
}

const styles = StyleSheet.create({
    imageContainer:
    { 
        borderRadius: 25, 
        backgroundColor: "white", 
        alignItems: "center", 
        marginRight: 5, 
        width: 50, 
        height: 50, 
        justifyContent: "center", 
        overflow: "hidden", 
        borderWidth: 1, 
        borderColor: "grey" 
    },

    image:
    {
        width: 50,
        height: 50,
        resizeMode: "contain"
    },

    username:
    {
        color: "white", 
        fontSize: 20, 
        fontWeight: "bold"
    },
    container: {
        flexDirection: "row", 
        justifyContent: "flex-start", 
        alignItems: "center",
    }
})