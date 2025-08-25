import { icons } from "@/constants/icons";
import fetchMovies from "@/service/Api";
import useFetch from "@/service/useFatch";
import { ActivityIndicator, Image, ScrollView, Text, View } from "react-native";

import MovieCard from "@/components/MovieCard";
import TrendingMovieCard from "@/components/TrendingMovieCard";
import { getTrendingMovies } from "@/service/appwrite";
import { LinearGradient } from "expo-linear-gradient";



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

  const {
    data: trendingMovies,
    loading: trendingLoading,
    error: trendingError,
  } = useFetch(getTrendingMovies);





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









        <Image source={icons.logo} className=" w-12 h-12 my-2" />
        <View className="items-center justify-center mb-4">
          <Text className="text-white text-3xl font-bold">Welcome to MovieApp</Text>
          <Text className="text-white text-sm mt-2">Discover movies, TV shows, and more.</Text>
        </View>


        <ScrollView>


          <View className=" flex flex-col items-start justify-center mb-4 w-full">

            <Text className=" text-sm  text-violet-300 font-bold">Trending movies.</Text>
            <ScrollView horizontal={true} contentContainerClassName=" rounded-md mt-2 gap-4  items-center justify-center ">
              {
                trendingMovies?.map(movie => (
                  // console.log(movie),
                  <TrendingMovieCard key={movie.$id} movie={movie} />
                ))
              }
            </ScrollView>

          </View>



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
                    <MovieCard key={movie.id} id={movie.id} title={movie.title} poster_path={movie.poster_path} star={movie.vote_average} year={movie.release_date.split('-')[0]} />
                  ))
                }
              </ScrollView>

            ) : (
              <Text>No movies found</Text>
            )
          }



        </ScrollView>















      </LinearGradient>

    </View>
  );
}














{/* <Image source={bgImage} className="absolute w-full z-0" /> */ }




