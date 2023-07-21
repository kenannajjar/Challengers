import React from 'react';
import { View, Text } from 'react-native';

const DifficultyBar = ({ level }) => {
    const renderSlots = () => {
        const slots = [];

        for (let i = 1; i <= 4; i++) {
            const slotColor = i <= level ? getSlotColor(i) : 'white';
            slots.push(<View key={i} style={{ width: 20, height: 12, backgroundColor: slotColor, margin: 2 }} />);
        }

        return slots;
    };

    const getSlotColor = (slotIndex) => {
        if (slotIndex <= level) {
            if (level <= 1) return 'green';
            else if (level >= 2 && level <= 3) return 'yellow';
            else return 'red';
        }
        return 'white';
    };

    const renderDifficulty = () => {
        switch (level) {
            case 1: return <Text className="font-bold">Easy</Text>;
            case 2: return <Text className="font-bold">Medium</Text>;
            case 3: return <Text className="font-bold">Hard</Text>;
            case 4: return <Text className="font-bold">Extreme</Text>;
        }
    };

    return (
        <View className="flex flex-col justify-left">
            <View className="flex-row">
                {renderSlots()}
            </View>
            <View className="flex flex-row justify-end">
                <View>
                    {renderDifficulty()}
                </View>
            </View>
        </View>
    );
};

export default DifficultyBar;
