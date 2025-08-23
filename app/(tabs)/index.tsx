import { icons } from "@/constants/icons";
import fetchMovies from "@/service/Api";
import useFetch from "@/service/useFatch";
import { ActivityIndicator, Image, ScrollView, Text, TextInput, View } from "react-native";

import FontAwesome from '@expo/vector-icons/FontAwesome';
import { LinearGradient } from "expo-linear-gradient";
import MovieCard from "@/components/MovieCard";



export default function Index() {


  const {
    data: moviesData,
    loading: moviesLoading,
    error: moviesError,
    refetch: moviesRefetch,
    reset: moviesReset

  } = useFetch(() => fetchMovies({
    query: ''
  }), true);





  return (
    <View
      className="flex-1   relative"
    >
      <LinearGradient
        colors={["#5900B2", "black"]} // from Tailwind's indigo-600 to purple-600
        start={{ y: 0 }}   // top-left
        end={{ y: 1 }}   // bottom-right
        className="flex-1  items-center justify-center   p-4  "
      >









        <Image source={icons.logo} className=" w-12 h-12 my-6" />


        {
          moviesLoading ? (
            <ActivityIndicator size="large" color="white" className="mt-4"
            />
          ) : moviesError ? (<Text className="text-white">Error fetching movies: {moviesError.message}</Text>

          ) : moviesData ? (
            <ScrollView contentContainerClassName=" flex-row flex-wrap gap-[12px]  items-center justify-center rounded-md ">
              {
                moviesData.map(movie => (
                  // console.log(movie.poster_path),
                  <MovieCard key={movie.id} id={movie.id} title={movie.title} poster_path={movie.poster_path} star={movie.vote_average } year={movie.release_date.split('-')[0]}  />
                ))
              }
            </ScrollView>

          ) : (
            <Text>No movies found</Text>
          )
        }














      </LinearGradient>

    </View>
  );
}














{/* <Image source={bgImage} className="absolute w-full z-0" /> */ }




