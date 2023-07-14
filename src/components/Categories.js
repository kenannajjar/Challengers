import React from 'react'
import { View, StyleSheet } from 'react-native'
import CategoryButton from './CategoryButton'

export default function Categories() {

    const column1 = cats.filter((_, index) => index % 2 === 0);
    const column2 = cats.filter((_, index) => index % 2 !== 0);

    return (
        <View style={styles.container}>
            <View style={styles.column1}>
                {column1.map((cat, index) => (
                    <CategoryButton cat={cat} key={index} />
                ))}
            </View>
            <View style={styles.column2}>
                {column2.map((cat, index) => (
                    <CategoryButton cat={cat} key={index} />
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row", 
        justifyContent: "center", 
        paddingTop: 10,
        backgroundColor: "#121212"
    },
    column1: {
        flex: 1, 
        marginLeft: 20, 
        marginRight: 5
    },
    column2: {
        flex: 1, 
        marginLeft: 5, 
        marginRight: 20
    },
});

const cats = [{
    title: "Gaming",
    image: require("../../assets/gaming.png"),
    color: "#3A4EFF"
},
{
    title: "Music",
    image: require("../../assets/music.png"),
    color: "#A59DFB"
},
{
    title: "Mini-Games",
    image: require("../../assets/strategy.png"),
    color: "#02497E"
},
{
    title: "Moves & TV Shows",
    image: require("../../assets/popcorn.png"),
    color: "#E09FDA"
},
{
    title: "History",
    image: require("../../assets/scroll.png"),
    color: "#640F0F"
},
{
    title: "Science",
    image: require("../../assets/microscope.png"),
    color: "#318072"
},
{
    title: "Pop Culture",
    image: require("../../assets/oscar.png"),
    color: "#9C0202"
},
{
    title: "Food",
    image: require("../../assets/chicken.png"),
    color: "#525FD6"
},
{
    title: "Gaming",
    image: require("../../assets/focus.png"),
    color: "blue"
},
{
    title: "Gaming",
    image: require("../../assets/focus.png"),
    color: "blue"
},
{
    title: "Gaming",
    image: require("../../assets/focus.png"),
    color: "blue"
},
{
    title: "Gaming",
    image: require("../../assets/focus.png"),
    color: "blue"
},
]