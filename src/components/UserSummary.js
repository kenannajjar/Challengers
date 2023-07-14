import React, { useState, useEffect } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { getUserData } from '../firebase/api';
import { useUserContext } from '../context/UserContext';

export default function UserSummary() {

    const [username, setUsername] = useState('');
    const [ribbits, setRibbits] = useState(0);

    // user context
    const { user } = useUserContext();

    useEffect(() => {
        const fetchData = async () => {
            const userData = await getUserData(user.uid);
            setUsername(userData.username);
            setRibbits(userData.ribbits);
        };

        fetchData();
    }, []);


    return (
        <View style={styles.mainContainer}>
            <View style={styles.innerContainer}>
                <View style={styles.imageContainer}>
                    <Image source={userInfo.profilePic} style={styles.image} />
                </View>
                <Text style={styles.username}> {username} </Text>
            </View>
            <View style={styles.creditContainer}>
                <Image source={require("../../assets/ribbit.png")} style={styles.creditImage} />
                <Text style={styles.creditText}>{ribbits}</Text>
                <TouchableOpacity style={styles.addButton}>
                    <Image source={require("../../assets/add.png")} style={styles.addButtonImage} />
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
    mainContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#1e1e1e"
    },

    innerContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },

    imageContainer: {
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

    image: {
        width: 50,
        height: 50,
        resizeMode: "contain"
    },

    username: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold"
    },

    creditContainer: {
        borderRadius: 25,
        borderWidth: 1,
        borderColor: "white",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#242424",
        height: 50
    },

    creditImage: {
        height: 45,
        width: 45,
        marginRight: 15,
        marginBottom: 3
    },

    creditText: {
        color: "white",
        marginRight: 2,
        fontSize: 20,
        fontWeight: "bold"
    },

    addButton: {
        height: 36,
        width: 36,
        borderRadius: 18
    },

    addButtonImage: {
        height: 36,
        width: 36
    },
})
