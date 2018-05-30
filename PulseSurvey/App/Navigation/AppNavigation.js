import { StackNavigator, TabNavigator } from 'react-navigation'
import SurveyDetails from '../Containers/SurveyDetails'
import AllSurveys from '../Containers/AllSurveys'
import AnswerSurvey from '../Containers/AnswerSurvey'
import Settings from '../Containers/Settings'
import LoginScreen from '../Containers/LoginScreen'
import SurveyQuestions from '../Containers/SurveyQuestions'

import Mex from '../Containers/Mex'
import Me from '../Containers/Me'

import Icon from 'react-native-vector-icons/Ionicons';
import LaunchScreen from '../Containers/LaunchScreen'


import React, {Component} from 'react';
import styles from './Styles/NavigationStyles'


const Tabs = TabNavigator({
  AllSurveys: {
    screen: AllSurveys,
    navigationOptions: {
      title: 'All Surveys',
       tabBarIcon: () => (<Icon name="ios-megaphone-outline" size={26} />),
    },
  },
  SurveyDetails: {
    screen: SurveyDetails,
    navigationOptions: {
      title: 'New Survey',
      tabBarIcon: () => (<Icon name="ios-create-outline" size={26} />),
    },
  },
    Settings: {
    screen: Settings,
    navigationOptions: {
      title: 'Settings',
      tabBarIcon: () => (<Icon name="ios-settings-outline" size={26} />),
    },
  },
});

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  SurveyDetails: { screen: SurveyDetails },
  SurveyQuestions: { screen: SurveyQuestions },
  AnswerSurvey: { screen: AnswerSurvey },
  TabNav: { screen: Tabs },
  LoginScreen: { screen: LoginScreen },
  LaunchScreen: { screen: LaunchScreen },
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
