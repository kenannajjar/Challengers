import React from 'react'
import { Text, View, Image } from 'react-native'

export default function CategoryPage() {
    return (
      <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingLeft: 100}}>
        <Image 
         style={{ width: 800, height: 800, alignContent: 'center'}}
        source = {require("../../assets/kenan.jpg")} />
      </View>
    )
}
