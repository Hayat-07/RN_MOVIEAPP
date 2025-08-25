import { icons } from "@/constants/icons";
import fetchMovies from "@/service/Api";
import useFetch from "@/service/useFatch";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, Text, TextInput, View } from "react-native";


import MovieCard from "@/components/MovieCard";
import { updateSearchCount } from "@/service/appwrite";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { LinearGradient } from "expo-linear-gradient";


export default function search() {

    const [searchQuery, setSearchQuery] = useState('');
    const {
        data: moviesData,
        loading: moviesLoading,
        error: moviesError,
        refetch: moviesRefetch,
        reset: moviesReset

    } = useFetch(() => fetchMovies({
        query: searchQuery
    }), false);

    useEffect(() => {

        const fnc = setTimeout(async () => {
            if (searchQuery.trim()) {
                await moviesRefetch();

            }
        }, 700);
        return () => clearTimeout(fnc);

    }, [searchQuery])

    useEffect(() => {
        if (moviesData?.length > 0 && moviesData?.[0]) {
            updateSearchCount(searchQuery, moviesData[0]);
        } else {
            moviesReset();
        }
    }, [moviesData])






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









                <Image source={icons.logo} className=" w-12 h-12 " />
                <View className="flex-row gap-3 w-full items-center border-2 border-white rounded-full px-8 py-1 my-6">
                    <FontAwesome name="search" size={20} color="white" />
                    <TextInput
                        value={searchQuery}
                        placeholder="Search Movie..."
                        placeholderTextColor="white"
                        onChangeText={(text) => {
                            setSearchQuery(text);
                            //   moviesRefetch();
                        }}
                    />
                </View>



                {
                    moviesLoading ? (
                        <ActivityIndicator size="large" color="white" className="mt-4"
                        />
                    ) : moviesError ? (<Text className="text-white">Error fetching movies: {moviesError.message}</Text>

                    ) : moviesData ? (

                        <FlatList
                            data={moviesData}
                            renderItem={({ item }) => (
                                <MovieCard key={item.id} id={item.id} title={item.title} poster_path={item.poster_path} star={item.vote_average} />
                            )}
                            keyExtractor={(item) => item.id.toString()}
                            className="px-5 "
                            numColumns={3}
                            showsVerticalScrollIndicator={false}
                            columnWrapperStyle={{ justifyContent: 'center', gap: 16, marginVertical: 16 }}
                            contentContainerStyle={{ paddingBottom: 100 }}
                            ListEmptyComponent={<Text className="text-white">No movies found</Text>}
                        />

                    ) : (
                        <Text>No movies found</Text>
                    )
                }














            </LinearGradient>

        </View>
    );
}














{/* <Image source={bgImage} className="absolute w-full z-0" /> */ }




