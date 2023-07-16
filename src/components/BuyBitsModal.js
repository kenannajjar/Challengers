import { View, Text, Image } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';

export default function BuyBitsModal() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style = {styles.topBar}>
                <Text style={styles.label}>Purchase Bits</Text>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require("../../assets/close.png")} style={styles.button} />
                </TouchableOpacity>
            </View>
        </View>
    )


}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1e1e1e",
        flex: 1,
        padding: 20,
    },
    label: {
        color: "white",
        fontSize: 25,
        fontWeight: "bold",
    }, 
    topBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    button: {
        width: 30,
        height: 30
    }
})