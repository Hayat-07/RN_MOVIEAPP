import { fetchMovieDetails } from '@/service/Api'
import { useFetch } from '@/service/useFatch'
import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'

const MovieDetailsPage = () => {
  const { id } = useLocalSearchParams();

  // console.log("Movie ID:", id);
  const { data: movie, loading, error } = useFetch(() => fetchMovieDetails(id as string));
  if (movie) {
    console.log("Movie Data:", movie.poster_path);
  
  }

  return (
    <View className="flex-1 bg-black px-4 py-6">
        <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
          <View className="mb-4">
            <Text className="text-3xl font-bold text-white mb-2">{movie?.poster_path}</Text>
            <Text className="text-3xl font-bold text-white mb-2">{movie?.backdrop_path}</Text>
           
            <Image source={{ uri: `https://image.tmdb.org/t/p/w500${movie?.poster_path}` }} className="w-full h-80 rounded-lg" resizeMode='cover' />
          </View>
          {/* <Text className="text-white">Overview::: {JSON.stringify(movie.overview)} </Text> */}
    </ScrollView>
      </View>
  )
}

export default MovieDetailsPage