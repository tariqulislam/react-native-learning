import React from 'react';
import { createStackNavigator } from 'react-navigation';
import {Home}from '../views/Home';
import {Contact} from '../views/Contact';

export const AppRoute = createStackNavigator({
  HomeRT: {
    screen: Home,
    navigationOptions: {
        header: null,
        title: 'Home Page'
    }
  },
  ContactRT: {
    screen: Contact,
    navigationOptions: {
        header: null,
        title: 'About Page'
    }

  },
},
{
  initialRouteName: 'HomeRT'
})