import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header';
import React from 'react';
const screens = {
  Home: {
    screen: Home,
    navigationOptions:({navigation})=>{
      return{
        headerTitle: ()=><Header  title='Home-Training' navigation={navigation} />,
      }
    }
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions:{
      title: 'Review Details',
      //headerStyles:{backgroundColor:'#eee'}
    }
  }
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens,{
  defaultNavigationOptions:{
    headerTintColor: '#444',
    headerStyle:{backgroundColor:'#eee',height:60}
  }
});

export default HomeStack;