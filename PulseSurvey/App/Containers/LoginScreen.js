import React, { Component,PropTypes } from 'react'
import { ScrollView, Image, Text,TextInput,TouchableHighlight, View } from 'react-native'
import { connect } from 'react-redux'
import { Button, StyleSheet } from 'react-native'
import Dimensions from 'Dimensions'
import { Sae } from 'react-native-textinput-effects';
import AllSurveys from '../Containers/AllSurveys'
import LoginActions from '../Redux/LoginRedux';
// Styles
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Images } from '../Themes'
import images from '../Themes/Images';
// Styles
import styles from './Styles/LoginScreenStyle'

import Reactotron from 'reactotron-react-native';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMsg: '',
    }
  }

  componentDidMount() {
    if (this.props.token != null) {
      const { navigate } = this.props.navigation;
      navigate('AllSurveys');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.errorMsg !== nextProps.errorMsg) {
      this.setState({ errorMsg: nextProps.errorMsg });
    }
  }

  goNext = () => {
    if (this.props.fetchingLogin) {
      return;
    }
          //const { navigate } = this.props.navigation;
     // navigate('AllSurveys');
    const { email, password } = this.state;
    this.props.doLogin(email, password);
  }

  enterEmail = (text) => {
    this.setState({ email: text });
  }  

  enterPassword = (text) => {
    this.setState({ password: text });
  }  

    render() {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.pulse} style={styles.pulseImage} resizeMode='center' />
          </View>
          <View style={styles.centered}>
             <Text style={styles.titleText}>Pulse Survey</Text>
          </View>
          <View style={styles.loginView}>
            <Sae
              label="Email Address"
              labelStyle ={{ color: '#00B2EE' }}
              iconClass={FontAwesomeIcon}
              iconName="pencil"
              iconColor="white"
              // TextInput props
              autoCapitalize={'none'}
              autoCorrect={false}
              onChangeText={this.enterEmail}
             
            />
            <Sae
              label="Password"
              labelStyle ={{ color: '#00B2EE' }}
              iconClass={FontAwesomeIcon}
              iconName={'pencil'}
              iconColor={'white'}
              // TextInput props
              autoCapitalize={'none'}
              autoCorrect={false}
              onChangeText={this.enterPassword}
              style = {styles.inputText}
              secureTextEntry 
            />
            <TouchableHighlight
              style={styles.inputButton}
              onPress={this.goNext}>

              <View style={styles.loginButtonView}>
                {this.props.fetchingLogin &&
                  <Text style={[styles.buttonText]}>LOGGING IN</Text>
                }
                {!this.props.fetchingLogin &&
                  <Text style={styles.buttonText}>LOG IN</Text>
                }
              </View>
            </TouchableHighlight>
          </View>
        </ScrollView>
      </View>    
    );
  }
}


const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    doLogin: (email, password) => dispatch(LoginActions.loginRequest(email, password)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
