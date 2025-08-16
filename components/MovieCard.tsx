import { View, Text,Image } from 'react-native'
import React from 'react'

const MovieCard = ({ id, title, poster_path }) => {
  return (
    <View key={id} className="mb-4">
      <Text className="text-white">{title}</Text>
      <Image source={{ uri: `https://image.tmdb.org/t/p/w500${poster_path}` }} className="w-full h-48 rounded-lg" />
    </View>
  )
}


export default MovieCard