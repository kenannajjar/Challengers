import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'


export default function ChallengeButton( {challenge} ) {
  return (
    <TouchableOpacity style = {{backgroundColor: challenge.color, borderRadius: 5, marginBottom: 10, padding: 10}}>
            <Text style = {styles.text}>{challenge.title}</Text>
            <Text style = {styles.text}>{challenge.difficulty}</Text>
            <Text style = {styles.text}>{challenge.expiration}</Text>
            <Text style = {styles.text}>Prize: {challenge.prize}</Text>
            <Text style = {styles.text}>Cost: {challenge.cost}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20
  }

})

