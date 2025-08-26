import { fetchMovieDetails } from '@/service/Api'
import { useFetch } from '@/service/useFatch'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { useLocalSearchParams,useRouter } from 'expo-router'
import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'


const MovieDetailsPage = () => {
  const { id } = useLocalSearchParams();
  // console.log("Movie ID:", id);
  const router= useRouter();
  const { data: movie, loading, error } = useFetch(() => fetchMovieDetails(id as string));
  if (movie) {
    console.log("Movie Data:", movie.poster_path);

  }

  return (
    <View className="flex-1 bg-black px-4 py-6">
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        <View className="mb-4">

          <Image source={{ uri: `https://image.tmdb.org/t/p/w500${movie?.poster_path}` }} className="w-full h-[512px] rounded-lg mb-4" resizeMode='cover' />
          <Text className="text-3xl font-bold text-white mb-2">{movie?.original_title}</Text>
          <View className='flex flex-row items-center gap-2 mb-4 border-y-2 py-2 border-gray-600'>
            <Text className="text-white text-lg">{new Date(movie?.release_date || '').getFullYear()}</Text>

            <Text className='text-white text-lg'> ( <FontAwesome name="star" size={18} color="gold" /> {movie?.vote_average} )</Text>
            {/* <Text className='text-gray text-base '>(Total: {movie?.vote_count} vote) & ( {movie.runtime||''}min)</Text> */}
          </View>
          <Text className="text-base text-gray mb-1">Overview</Text>
          <Text className="text-base text-white mb-4">{movie?.overview}</Text>
          <Text className="text-base text-gray mb-1">Genres</Text>
          <Text className="text-base text-white mb-4">{movie?.genres.map(genre => genre.name).join(', ')}</Text>

        </View>

        <View className='flex flex-row gap-4'>
          <View>
            <Text className="text-base text-gray mb-1">Budget</Text>
            <Text className="text-base text-white mb-4">{movie?.budget}</Text>
          </View>
          <View>
            <Text className="text-base text-gray mb-1">Revenue</Text>
            <Text className="text-base text-white mb-4">{movie?.revenue}</Text>
          </View>
        </View>
        <View className='flex flex-row gap-4'>
          <View>
            <Text className="text-base text-gray mb-1">Production Company</Text>
            <Text className="text-base text-white mb-4">{movie?.production_companies.map(company => company.name).join(', ')}</Text>
          </View>
        </View>

        

      </ScrollView>
      <TouchableOpacity onPress={router.back} className="bg-purple-800 py-3 rounded-lg items-center mt-4 mb-8 absolute bottom-0 left-0 right-0">
          <Text className="text-white text-lg font-semibold">Go Back</Text>
        </TouchableOpacity>
    </View>
  )
}

export default MovieDetailsPage