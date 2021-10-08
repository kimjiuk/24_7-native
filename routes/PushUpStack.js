import { createStackNavigator } from 'react-navigation-stack';
import PushUp from '../screens/PushUp';
import Header from '../shared/header';
import React from 'react';

const screens = {
  About: {
    screen: PushUp,
    navigationOptions:({navigation}) =>{
        return {
            headerTitle: ()=> <Header navigation={navigation} title='PushUp' />,
        }
    },
  },
};

// home stack navigator screens
const PushUpStack = createStackNavigator(screens,{
  defaultNavigationOptions:{
    headerTintColor: '#444',
    headerStyle:{backgroundColor:'#eee',height:60},
  }
});

export default PushUpStack;