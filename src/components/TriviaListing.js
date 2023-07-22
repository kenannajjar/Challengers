import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Image } from 'expo-image';
import DifficultyBar from './DifficultyBar';
import PrizeRectangle from './PrizeRectangle';
import { getServerTime } from '../../firebase/api';

const TriviaListing = ({ pictureLeft, titleLeft, prize, entry, difficultyLevel, timeOfEvent }) => {

    const [timeLeft, setTimeLeft] = useState(null);

    useEffect(() => {
        const getTimeLeft = async () => {
            const serverTime = await getServerTime();
            setTimeLeft(timeOfEvent - serverTime);
        };

        getTimeLeft();

        // Update timeLeft every second
        const intervalId = setInterval(() => {
            setTimeLeft((prevTimeLeft) => prevTimeLeft - 1); // Subtract 1 second every 1000 milliseconds
        }, 1000);

        // Clean up the interval when the component is unmounted
        return () => clearInterval(intervalId);
    }, []);

    const formatDuration = (totalSeconds) => {
        const hours = Math.floor(totalSeconds / 3600); // Number of hours (3600 seconds in an hour)
        const minutes = Math.floor((totalSeconds % 3600) / 60); // Number of minutes (60 seconds in a minute)
        const seconds = totalSeconds % 60; // Remaining seconds

        // Format the string with leading zeros for single-digit hours, minutes, and seconds
        const formattedString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        return formattedString;
    };


    return (
        <View className="flex-col">
            <View className="bg-slate-500 w-full h-40 rounded-lg shadow-lg mt-4">
                <View className="flex-row items-center justify-between h-full">
                    <View className="flex-1">
                        <View className="flex flex-col items-center justify-center h-full">
                            <Image source={pictureLeft} className="w-24 h-24" />
                            <Text className="text-white text-2xl font-bold">{titleLeft}</Text>
                        </View>
                    </View>

                    <View className="flex-1">
                        <View className="flex-col items-end h-full justify-around">
                            <View className="mr-2">
                                <DifficultyBar level={difficultyLevel} />
                            </View>


                            <PrizeRectangle prize={prize} />
                            <Text className="text-gray-800 font-semibold mr-2">Entry: {entry}</Text>

                            <View>
                                <Text className="text-white text-2xl font-bold"></Text>
                            </View>

                            <View className="mr-2 rounded-lg bg-gray-800 padding p-2">
                                <Text className="text-white ">{formatDuration(timeLeft)}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>


    );
};

export default TriviaListing;