import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'

export default function UserSummary() {
    return (
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", backgroundColor: "#1e1e1e" }}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={userInfo.profilePic} style={styles.image} />
                </View>
                <Text style={styles.username}> {userInfo.username} </Text>
            </View>
            <View style = {{ borderRadius: 25, borderWidth: 1, borderColor: "white", alignItems: "center", flexDirection: "row", backgroundColor: "#242424", height: 50 }}>
                <Image source= {require("../../assets/ribbit.png")} style = {{height: 45 , width: 45, marginRight: 15, marginBottom: 3 }}/>
                <Text style={{color: "white", marginRight: 2, fontSize: 20, fontWeight: 800}}>{userInfo.credits}</Text>
                <TouchableOpacity style = {{height: 36, width: 36, borderRadius: 18}}>
                    <Image source= {require("../../assets/add.png")} style = {{height: 36, width: 36}}/>
                </TouchableOpacity>
            </View>
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