import React, { Component } from 'react'
import { ScrollView, Image, Text, View,TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import { Button, StyleSheet } from 'react-native'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js'
import { Images } from '../Themes'
import SurveyQuestions from '../Containers/SurveyQuestions'
import { Sae } from 'react-native-textinput-effects';
// Styles
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import styles from './Styles/LaunchScreenStyles'
import styles1 from './Styles/MeStyle'
const styles2 = StyleSheet.create({

  buttonContainer: {
    backgroundColor: '#2E9298',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#ffffff',
    shadowOffset: {
      width: 0,
      height: 30
    },
    shadowRadius: 15,
    shadowOpacity: 0.25,
    marginTop: 250
  }
})
class Me extends Component {
  constructor(props) {
    super(props);
  }
  goNext = () => {
    const { navigate } = this.props.navigation;
    navigate('SurveyQuestions');
  }
  render () {

    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles1.centered}>
            <TouchableHighlight
              style={styles1.inputButton}
              onPress={this.goNext}>
              <Text style={styles1.buttonText}> Create New Survey </Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles1.inputButton}
              onPress={this.goNext}>
              <Text style={styles1.buttonText}> See All Surveys </Text>
            </TouchableHighlight>
          </View>
        </ScrollView>
      </View>    
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Me)
