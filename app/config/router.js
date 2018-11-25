import React from 'react';
import { View, Text, Button } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation'; 
import Home from '../pages/Home'
import Me from '../pages/Me'




export const BottomTab = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: '首页',
    }
  },
  Me: {
    screen: Me,
    navigationOptions: {
      tabBarLabel: '我的',
    }
  },
  
})

// export AppNavigator;