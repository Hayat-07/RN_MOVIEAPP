import React from 'react'
import { Text, View } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

const profile = () => {
    return (
        <LinearGradient
            colors={["#5900B2", "black"]} // from Tailwind's indigo-600 to purple-600
            start={{ y: 0 }}   // top-left
            end={{ y: 1 }} className='flex-1 '  >

            <View className=' justify-center items-center'>
                <Text className="text-white">profile</Text>
            </View>

        </LinearGradient>

    )
}

export default profile