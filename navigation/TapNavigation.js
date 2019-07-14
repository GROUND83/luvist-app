import React from "react";
import { View, Text, TouchableOpacity,Platform } from "react-native";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import Home from "../screens/Taps/Home";
import Search from "../screens/Taps/Search";
import Notification from "../screens/Taps/Notification";
import Profile from "../screens/Taps/Profile";
import MessagesLink from "../components/MessageLink";
import NavIcon from "../components/NavIcon";
import styles from "../styles";
import { stackStyles } from "./config";

const stackFactory = (initialRoute, customConfig) =>
  createStackNavigator({
    InitialRoute: {
      screen: initialRoute,
      navigationOptions: { ...customConfig, headerStyle:{...stackStyles}}
    }
  });

export default createBottomTabNavigator({
  Home: {
    screen: stackFactory(Home, {
      title: "Home",
      headerRight: <MessagesLink />
    }),navigationOptions:{
      tabBarIcon:({focused}) =>(
        <NavIcon 
          focused={focused}
          name={Platform.Os === "ios" ? "ios-home" : "md-home"}  />
      )
    }

  },
  Search: {
    screen: stackFactory(Search, {
      title: "Search"
    }),navigationOptions:{
      tabBarIcon: ({focused}) => (
        <NavIcon 
          focused={focused}  
          name={Platform.Os === "ios" ? "ios-search" : "md-search"}  />
      )
    }
  },
  Add: {
    screen: View,
    navigationOptions: {
      tabBarOnPress: ({ navigation }) => navigation.navigate("PhotoNavigation"),
      tabBarIcon: ({focused}) => (
        <NavIcon 
          focused={focused}
          name={Platform.Os === "ios" ? "ios-add" : "md-add"} size={36} />
      )
    }
  },
  Notification: {
    screen: stackFactory(Notification, {
      title: "Notifications"
    }),navigationOptions:{
      tabBarIcon: ({focused}) => (
        <NavIcon 
          focused={focused}
          name={Platform.OS === "ios" 
            ? focused 
              ?  "ios-heart" :"ios-heart-empty" 
            : focused 
              ? "md-heart" : "md-heart-empty"}  
        />
      )
    }
  },
  Profile: {
    screen: stackFactory(Profile, {
      title: "Profile"
    }),navigationOptions:{
      tabBarIcon: ({focused}) => (
        <NavIcon 
          focused={focused}
          name={Platform.Os === "ios" ? "ios-person" : "md-person"}  />
      )
    }
  }
},{
  tabBarOptions : {
    showLabel: false,
    style:{
      backgroundColor: "#fafafa"
    }
  }
}
);
