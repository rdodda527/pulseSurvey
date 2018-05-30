import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles1 from './Styles/SurveyQuestionsStyle'
import styles from '../Containers/Styles/LaunchScreenStyles'
// Styles

export default class SurveyQuestions extends Component {
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

    const questionComponents1 = this.state.questions.map((el,i) => (
    <View key={i}>
      <TextInput
        style={styles1.form}
        multiline = {true}
        numberOfLines = {6}
        value={this.state.questions[i]}
        onChangeText={(txt)=>this.handleInputChange(txt, i)}
      />
      <TouchableHighlight
      style={styles1.addButton1}
      onPress={this.handleInputRemove.bind(this,i)}>
        <Icon style={styles1.buttonText} color="red" name="md-close" size={10} />
      </TouchableHighlight>
    </View>
    ))
    return(
      <View>
        {}
      </View>
    );
  }
}
