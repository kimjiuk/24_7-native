import { createStackNavigator } from 'react-navigation-stack';
import Squat from '../screens/Squat';
import Header from '../shared/header';
import React from 'react';

const screens = {
  Squat: {
    screen: Squat,
    navigationOptions:({navigation}) =>{
        return {
            headerTitle: ()=> <Header navigation={navigation} title='Squat' />,
        }
    },
  },
};

// home stack navigator screens
const SquatStack = createStackNavigator(screens,{
  defaultNavigationOptions:{
    headerTintColor: '#444',
    headerStyle:{backgroundColor:'#eee',height:60},
  }
});

export default SquatStack;