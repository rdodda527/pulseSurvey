import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text,TouchableHighlight } from 'react-native'
import styles from './Styles/UserListItemStyle'
import NxjProfilePic from './NxjProfilePic';
export default class UserListItem extends Component {
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
          onPress={this.handlePress}
          underlayColor='powderblue'
          style={{flex: 1}}>
          <View style={styles.userItem}>
            <View style={styles.userPicContainer}>
              <View style={styles.nxjProfilePicContainer}>
                <NxjProfilePic
                  employee={this.props.employee}
                  imgSize={60}
                />
              </View>
            </View>
            <View style={styles.userNameContainer}>
              <Text style={styles.userNameText}>
                {this.props.employee.Firstname} {this.props.employee.Lastname}
              </Text>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}
