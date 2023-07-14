import React from 'react';
import { Text, TouchableOpacity, Image, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CategoryButton = (props) => {
    const navigation = useNavigation();

    const goToCategory = function() {
        navigation.navigate('CategoryPage', {cat: props.cat}); // Navigate to the 'CategoryPage' screen
      };

    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: props.cat.color}]} onPress={goToCategory}>
            <Image source={props.cat.image} style={styles.image} />
            <Text style={styles.text}>{props.cat.title}</Text>
        </TouchableOpacity>
    )
}

export default CategoryButton;

const styles = StyleSheet.create({
    button: {
        borderRadius: 5, 
        alignItems: "center", 
        justifyContent: "center", 
        marginBottom: 10
    },
    image: {
        width: 80, 
        height: 80, 
        marginTop: 15, 
        marginBottom: 8
    },
    text: {
        color: "rgb(240, 232, 252)", 
        fontWeight: "bold", 
        fontSize: 18, 
        marginBottom: 10
    },
});
