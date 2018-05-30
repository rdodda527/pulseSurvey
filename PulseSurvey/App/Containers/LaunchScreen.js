import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js'
import { connect } from 'react-redux'
import { Images } from '../Themes'

import Me from './Me'
import LoginScreen from './LoginScreen'
import SurveyQuestions from './SurveyQuestions'
// Styles
import styles from './Styles/LaunchScreenStyles'

class LaunchScreen extends Component {
  componentDidMount() {
    const { navigate } = this.props.navigation;
    if (this.props.token != null) {
      navigate('Me');
    } else {
    	navigate('LoginScreen');
    }
    
  }
  render () {
    return (
      <View style={styles.mainContainer} />
    )
  }
}
const mapStateToProps = state => ({

});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen);