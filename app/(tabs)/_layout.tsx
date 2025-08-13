
import { Tabs } from 'expo-router';
import React from 'react';
import { Text, View } from "react-native";

import FontAwesome from '@expo/vector-icons/FontAwesome';







const _layout = () => {


  return (
    <Tabs
      className="flex justify-center items-center "
      screenOptions={({ route }) => ({
        headerShown: false,
        // tabBarActiveTintColor: "red",

        tabBarStyle: {
          display: "flex",
          height: 86,
          width: "100%",
          padding: 8,
          insetBlock: 0,
          flexDirection: "row",
          backgroundColor: "white",
          // borderTopWidth: 0,
          
          // height: 80,
          alignItems: "center",
          justifyContent: "center",
         
        },



        tabBarIcon: ({ focused, color, size }) => {

          let tabIcon;
          let labelName;
          switch (route.name) {
            case "index":
              tabIcon = "home";
              labelName = "Home";
              break;
            case "profile":
              tabIcon = "user";
              labelName = "Profile";
              break;
            case "search":
              tabIcon = "search";
              labelName = "Search";
              break;
            case "saved":
              tabIcon = "bookmark";
              labelName = "Saved";
              break;
            default:
              tabIcon = "circle";
              labelName = "Unknown";
          }
          return (
            <View className={`flex flex-col items-center justify-center  rounded-lg   w-[72] h-[64] border-b-2`} style={{borderColor: `${focused?"#5900B2" :"#0000"}`}}>
              <FontAwesome name={tabIcon} size={20} color={`${focused?"#5900B2" :"#000"}`} />
              <Text className='text-l' style={{color: `${focused?"#5900B2" :"#000"}`}}>{labelName}</Text>
            </View>
          );

        }



      })}



    >
      <Tabs.Screen name="index" options={{ title: "Home", }} />
      < Tabs.Screen name="profile" options={{ title: "Profile", }} />
      < Tabs.Screen name="search" options={{ title: "Search", }} />
      < Tabs.Screen name="saved" options={{ title: "Saved", }} />

    </Tabs >
  )
}

export default _layout