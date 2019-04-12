import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation';

// SCREENS
import BookmarksScreen from '../screens/BookmarksScreen'
import SearchScreen from '../screens/SearchScreen'
import PlaceDetailsScreen from '../screens/PlaceDetailsScreen'

const StackNavigator = createStackNavigator({

  Bookmarks: BookmarksScreen,
  Search: SearchScreen,
  PlaceDetails: PlaceDetailsScreen

},{
  initialRouteName: "Bookmarks",
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: "transparent",
      borderBottomWidth: 2,
      borderBottomColor: "#dcdcdc"
    },
    headerTitleStyle: {
      color: "#0B3142",
    }
  },
  headerLayoutPreset: "center",
})



const NavigationContainer = createAppContainer(StackNavigator);

export default NavigationContainer