import React from 'react';
import { createStackNavigator } from 'react-navigation';
import {Home}from '../views/Home';
import {Contact} from '../views/Contact';
import {Video} from '../views/Video';

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
  VideoRT: {
    screen: Video,
    navigationOptions: {
      title: 'Video page',
      header: null
    }
  }
},
{
  initialRouteName: 'HomeRT'
})