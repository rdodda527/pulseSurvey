import React, { Component } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { connect } from 'react-redux'

import {TabNavigator, StackNavigator} from 'react-navigation'


import Me from './Me'
import Mex from './Mex'
import SurveyQuestions from './SurveyQuestions'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/TabsStyle'


export const Tabs = TabNavigator({
  New:{
    screen: Me,
  },
  Mex:{
    screen: Mex,
  },
})


const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tabs)
