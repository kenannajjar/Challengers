import React from 'react';
import { Button, Image, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import storage from '../../firebase/storage';
import { ref, uploadBytesResumable, getDownloadURL, uploadString } from "firebase/storage";

const UploadFileButton = () => {
    const handleUpload = async () => {
        try {
            const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

            if (!permissionResult.granted) {
                console.log('Permission to access camera roll was denied');
                return;
            }

            const pickerResult = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Images });

            if (pickerResult.canceled) {
                console.log('Image picker was cancelled');
                return;
            }

            const uri = pickerResult.assets[0].uri;
            const filename = uri.substring(uri.lastIndexOf('/') + 1);

            //console.log the filename and extension  and say file uploading...
            console.log('Uploading file...');
            console.log('filename: ' + filename);

            // Creates an image ref to the storage bucket 
            const imagesRef = ref(storage, 'images/' + filename);

            // Read the file from the local file system
            const response = await fetch(uri);
            const blob = await response.blob();

            // Upload the file as a string
            const snapshot = await uploadBytesResumable(imagesRef, blob);

            // Get the download URL
            const downloadURL = await getDownloadURL(snapshot.ref);

            // console.log the download URL
            console.log('File available at', downloadURL);

            console.log('File uploaded successfully.');
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    return (
        <View>
            <Button title="Upload Photo" onPress={handleUpload} />
        </View>
    );
};

export default UploadFileButton;