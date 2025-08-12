
import { Tabs } from 'expo-router';
import React from 'react';
import { View,Text, Switch } from "react-native";

import FontAwesome from '@expo/vector-icons/FontAwesome';







const _layout = () => {


  return (
    <Tabs
      
      screenOptions={({ route }) => ({
        headerShown: false,
         
        tabBarStyle: {
          insetBlock: 0,
          flexDirection: "row",
          backgroundColor: "#fff",
          borderTopWidth: 0,
          height: 80,
          alignItems: "center",
          justifyContent: "space-around",
        },

        

        tabBarIcon: ({ focused, color, size }) => {
          let tabIcon ;
          let labelName ;
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
            <View style={{flex: 1 , flexDirection: "column",  alignItems: "center", justifyContent: "center" }}>
              <FontAwesome name={tabIcon} size={24} color="black" />
              <Text>{labelName}</Text>
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