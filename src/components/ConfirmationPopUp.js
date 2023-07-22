import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';



export default function ConfirmationPopUp({ triviaData }) {

    const navigation = useNavigation();




    return (
        <View className="bg-white h-2/5 w-full flex flex-col">
            <Text className="text-center text-2xl font-bold">
                Are you sure you want to join this trivia?
            </Text>

            <View className="flex flex-row justify-center">
                <View className="flex flex-col">
                    <Text className="text-center text-xl font-bold">Prize</Text>
                    <Text className="text-center text-xl font-bold">Entry</Text>
                    <Text className="text-center text-xl font-bold">Difficulty</Text>
                </View>
                <View className="flex flex-col">
                    <Text className="text-center text-xl font-bold">{triviaData.prize}</Text>
                    <Text className="text-center text-xl font-bold">{triviaData.entry}</Text>
                    <Text className="text-center text-xl font-bold">{triviaData.difficultyLevel}</Text>
                </View>
            </View>

            {/* Purchase / Cancel Buttons */}
            <View className="mt-auto flex flex-row">
                <TouchableOpacity className="flex-1 border h-14 border-stone-950 border-solid bg-green-500">
                    <Text className="m-auto text-xl">Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-1 border border-stone-950 border-solid bg-green-500">
                    <Text className="m-auto text-xl font-bold">Let's Play!</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
}



