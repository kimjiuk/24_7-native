import { createStackNavigator } from 'react-navigation-stack';
import SitUp from '../screens/SitUp';
import Header from '../shared/header';
import React from 'react';

const screens = {
  SitUp: {
    screen: SitUp,
    navigationOptions:({navigation}) =>{
        return {
            headerTitle: ()=> <Header navigation={navigation} title='SitUp' />,
        }
    },
  },
};

// home stack navigator screens
const SitUpStack = createStackNavigator(screens,{
  defaultNavigationOptions:{
    headerTintColor: '#444',
    headerStyle:{backgroundColor:'#eee',height:60},
  }
});

export default SitUpStack;