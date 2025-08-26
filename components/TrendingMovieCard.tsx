
import { useRouter } from "expo-router";
import React from 'react';

import { Image, Text, TouchableOpacity, View } from 'react-native';

const TrendingMovieCard = ({ movie }) => {
  const router = useRouter();

  return (
    <View className=" mb-4 flex flex-col items-start justify-center h-[330px] w-60    ">
      <TouchableOpacity
        key={movie.movie_id}
        onPress={() => {
          // Navigate to the movie details screen
          router.push(`/movies/${movie.movie_id}`);
        }}
      >
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_url}` }}
          className="h-[300px] w-[240px] rounded-lg"
        />
        <Text className='text-white text-wrap mt-2  '>{movie.title}</Text>
      </TouchableOpacity>

    </View>
  )
}

export default TrendingMovieCard;