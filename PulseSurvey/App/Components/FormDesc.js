import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text,TouchableHighlight } from 'react-native'
import styles from './Styles/FormDescStyle'
import Icon from 'react-native-vector-icons/Ionicons';
import styles1 from '../Containers/Styles/SurveyDetailsStyle'
export default class FormDesc extends Component {
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

  render () {
    return (
            <TouchableHighlight>
              <Icon style={styles1.buttonText} name="md-add" size={26} />
            </TouchableHighlight>
    )
  }
}
