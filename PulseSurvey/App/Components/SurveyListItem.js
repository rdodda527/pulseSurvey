import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text,TouchableHighlight } from 'react-native'
import styles from './Styles/SurveyListItemStyle'

export default class SurveyListItem extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }
  openSurvey= (evt) => {
    this.props.onPress(evt, this.props)
  }

  render () {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress = {this.openSurvey}
          underlayColor='powderblue'
          style={{flex: 1,borderColor:'#d6d7da'}}>
        <Text style={styles.name}>{this.props.survey.SurveyName}</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
