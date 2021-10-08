import { createStackNavigator } from 'react-navigation-stack';
import Memo from '../screens/Memo';
import Header from '../shared/header';
import React from 'react';

const screens = {
  Memo: {
    screen: Memo,
    navigationOptions:({navigation}) =>{
        return {
            headerTitle: ()=> <Header navigation={navigation} title='Memo' />,
        }
    },
  },
};

// home stack navigator screens
const MemoStack = createStackNavigator(screens,{
  defaultNavigationOptions:{
    headerTintColor: '#444',
    headerStyle:{backgroundColor:'#eee',height:60},
  }
});

export default MemoStack;