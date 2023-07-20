import { Text, View, Image } from 'react-native';

const ModernRectangle = ({ pictureLeft, titleLeft, pictureRight }) => {
    return (
        <View className="w-full h-full bg-gray-300">
            <View className="flex-1 items-center justify-center bg-white">
                <Image className="w-1/2" source={pictureLeft} />
                <Text className="text-white font-bold">{titleLeft}</Text>
            </View>
            <View className="w-1/2">
                <Image source={pictureRight} />
            </View>
        </View>
    );
};

export default ModernRectangle;