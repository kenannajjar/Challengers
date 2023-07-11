import React from 'react'
import { Text, View, Image } from 'react-native'

export default function UserSummary() {
    return (
        <View style = {{flexDirection: "row", justifyContent: "flex-start", alignItems: "center"}}>
            <View style={{ borderRadius: 25, backgroundColor: "white", alignItems: "center", marginRight: 5, width: 50, height: 50, justifyContent: "center", overflow: "hidden", borderWidth: 1, borderColor: "grey" }}>
                <Image source={userInfo.profilePic} style={{
                    width: 50,
                    height: 50,
                    resizeMode: "contain",
                }} />
            </View>
            <Text style = {{color: "white", fontSize: 20, fontWeight: "bold"}}> {userInfo.firstName} </Text>
        </View>
    )
}

const userInfo = {
    firstName: "Kenan",
    lastName: "Najjar",
    email: "kenannajjar@berkeley.edu",
    profilePic: require("../../assets/kenan.jpg"),
    credits: 100
}