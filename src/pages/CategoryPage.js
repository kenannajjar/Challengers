import React from 'react'
import { View, Image, SafeAreaView, Text, StyleSheet, ScrollView } from 'react-native'
import { useRoute } from '@react-navigation/native'
import UserSummary from '../components/UserSummary'
import ChallengeButton from '../components/ChallengeButton';

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
        {challenges.map((challenge, index) => (
        <ChallengeButton challenge = {challenge} />
        ))}
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

const challenges = [{
  title: "Apex Legends Trivia",
  difficulty: "Easy",
  expiration: "5:00 PM",
  cost: 200,
  prize: 400,
  color: "#3A4EFF"
},
{
  title: "League of Legends Trivia",
  difficulty: "Medium",
  expiration: "5:00 PM",
  cost: 200,
  prize: 400,
  color:  "#A59DFB"

},
{
  title: "Call of Duty Trivia",
  difficulty: "Hard",
  expiration: "5:00 PM",
  cost: 200,
  prize: 400,
  color: "#02497E"

},
{
  title: "Nintendo Trivia",
  difficulty: "Expert",
  expiration: "5:00 PM",
  cost: 200,
  prize: 400,
  color: "#640F0F"

}]