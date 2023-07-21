import React from 'react'
import { View, SafeAreaView, Text, StyleSheet, ScrollView } from 'react-native'
import { useRoute } from '@react-navigation/native'
import UserSummary from '../components/UserSummary'
import SoundPlayer from '../components/SoundPlayer'
import TriviaCreationPage from '../components/TriviaCreationPage'
import TriviaListing from '../components/TriviaListing'

export default function CategoryPage() {
  const route = useRoute();
  const { cat } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <UserSummary />
      </View>
      <Text style={styles.text}>{cat.title}</Text>
      <ScrollView style={styles.scrollView}>
        <View>
          <SoundPlayer soundUri={'https://firebasestorage.googleapis.com/v0/b/challengers-83d7e.appspot.com/o/sounds%2Fedit.mp3?alt=media&token=6eb8302c-1b0f-4380-ab78-805db4a4cf7a'} />
        </View>
        <TriviaListing
          pictureLeft={require('../../assets/currency.png')}
          titleLeft="Trivia 1"
          difficultyLevel={1}
          prize={200}
          entry={100}
          timeOfEvent={new Date().getTime() + 1000000}
        />
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
