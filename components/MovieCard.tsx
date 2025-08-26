import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useRouter } from "expo-router";
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';

const MovieCard = ({ id, title, poster_path, star, year }) => {

  const router = useRouter();


  return (
    <Pressable key={id} className="w-[31%] h-56 mb-4 flex flex-col justify-between" onPress={() => {
      // Navigate to the movie details screen
      router.push(`/movies/${id}`);
    }}>

      <Image source={{ uri: `https://image.tmdb.org/t/p/w500${poster_path}` }} className="w-full h-44
       rounded-lg" resizeMode='cover' />

      <View className='h-[16%]'>
        <Text className="text-white">{title}</Text>
        <View className='flex flex-row items-center gap-1'>
          {/* <Text className="text-white mr-2 text-base">{year}</Text> */}
          <FontAwesome name="star" size={14} color="gold" />
          <Text className='text-white '>{star}</Text>
        </View>
      </View>

    </Pressable>

  )
}


export default MovieCard