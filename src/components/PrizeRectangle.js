import { Text, View, Image } from 'react-native';

const PrizeRectangle = ({ prize }) => {
    return (
        <View className="flex-row w-5/6 bg-gray-800 rounded-lg mr-2 h-1/3">
            <Text className="m-1 text-white font-bold text-xl self-center">Prize: {prize}</Text>
            <Image style={{ flex: 1, height: undefined, width: undefined }} resizeMode="contain" source={require("../../assets/ribbit.png")} />
        </View >


    );
};

export default PrizeRectangle;