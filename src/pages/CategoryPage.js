import React from 'react'
import { View, Image, SafeAreaView, Text, StyleSheet, ScrollView } from 'react-native'
import { useRoute } from '@react-navigation/native'
import UserSummary from '../components/UserSummary'

export default function CategoryPage() {
  const route = useRoute();
  const { cat } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <UserSummary />
      </View>
      <Text style = {styles.text}>{cat.title}</Text>
      <ScrollView style = {styles.scrollView}>

      </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    paddingTop: Platform.OS === 'android' ? 40 : 0
  },
  container: {
    flex: 1,
    backgroundColor: "#1e1e1e",
    width: "100%"
  },
  text: {
    color: 'white',
    fontSize: 27,
    fontWeight: "bold",
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 20,
    backgroundColor: "#121212"
},
scrollView: {
  flex: 1,
  backgroundColor: "#121212",
  paddingLeft: 20,
  paddingRight: 20
}


})
