import React, { useState } from 'react'
import { View, SafeAreaView, Text, StyleSheet, ScrollView, Touchable } from 'react-native'
import { useRoute } from '@react-navigation/native'
import UserSummary from '../components/UserSummary'
import SoundPlayer from '../components/SoundPlayer'
import TriviaListing from '../components/TriviaListing'
import { TouchableOpacity } from 'react-native'
import Modal from "react-native-modal";
import ConfirmationPopUp from '../components/ConfirmationPopUp'

export default function CategoryPage() {

  const route = useRoute();
  const { cat } = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTriviaData, setSelectedTriviaData] = useState(null);


  const renderTriviaListings = () => {

    for (let i = 0; i < 1; i++) {
      return (
        <TouchableOpacity onPress={() => {
          setSelectedTriviaData({ title: "Trivia 1", difficultyLevel: 1, prize: 200, entry: 100, timeOfEvent: new Date().getTime() + 10000 });
          setModalVisible(!modalVisible);
        }}>
          <TriviaListing
            pictureLeft={require('../../assets/currency.png')}
            titleLeft="Trivia 1"
            difficultyLevel={1}
            prize={200}
            entry={100}
            timeOfEvent={new Date().getTime() + 10000}
          />
        </TouchableOpacity>
      )
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Confirmation Pop-Up */}
      <Modal
        isVisible={modalVisible}
        animationIn={'fadeIn'}
        animationOut={'fadeOut'}
        coverScreen={true}
        onBackdropPress={() => setModalVisible(false)}
        useNativeDriverForBackdrop={true}
      >
        <ConfirmationPopUp triviaData={selectedTriviaData} hideModal={() => setModalVisible(false)} />
      </Modal>


      <View style={styles.topBar}>
        <UserSummary />
      </View>
      <Text style={styles.text}>{cat.title}</Text>
      <ScrollView style={styles.scrollView}>
        <View>
          <SoundPlayer soundUri={'https://firebasestorage.googleapis.com/v0/b/challengers-83d7e.appspot.com/o/sounds%2Fedit.mp3?alt=media&token=6eb8302c-1b0f-4380-ab78-805db4a4cf7a'} />
        </View>
        {renderTriviaListings()}
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
