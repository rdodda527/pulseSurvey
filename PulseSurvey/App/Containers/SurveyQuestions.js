import React, { Component } from 'react'
import { Alert,Button,ScrollView, Image, Text, TextInput, StyleSheet, View, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import DatePicker from 'react-native-datepicker'
import {RoundedButton} from '../Components/RoundedButton'
import SurveyQuestionActions from '../Redux/SurveyQuestionsRedux';
import { Dropdown } from 'react-native-material-dropdown';
import Icon from 'react-native-vector-icons/Ionicons';
import Reactotron from 'reactotron-react-native';

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Images } from '../Themes'
// Styles
import styles from './Styles/LaunchScreenStyles'
import styles1 from './Styles/SurveyQuestionsStyle'
var x=["one"];
class SurveyQuestions extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      chosenDate: new Date(), 
      question: '',
          Holder: '',
      shareholders: [],};
      this.setDate = this.setDate.bind(this);
    }

    handleShareholderNameChange = (idx) => (evt) => {
      const newShareholders = this.state.shareholders.map((shareholder, sidx) => {
        if (idx !== sidx) return shareholder;
        return { ...shareholder, name: evt.target.value };
      });
      this.setState({ shareholders: newShareholders });
    }

    handleAddShareholder = () => {
      this.setState({
        shareholders: this.state.shareholders.concat([''])
      });
    }
    handleRemoveShareholder = (idx) => () => {
      this.setState({
        shareholders: this.state.shareholders.filter((s, sidx) => idx !== sidx)
      });
    }
    setDate(newDate) {
      this.setState({chosenDate: newDate})
    }

    handleTextChange = (text) => {
      this.setState({ question: text });
    }

  AddItemsToArray=()=>{
 
      //Adding Items To Array.
      x.push( this.state.Holder.toString() );
 
      // Showing the complete Array on Screen Using Alert.
      Alert.alert(x);
 
  }
    render () {
      const {goBack} = this.props.navigation;
      let data = [{
        value: 'Form',
      }, {
        value: 'TU/TD',
      }];
      return (
        <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
        <View style={styles.centered}>
        <Text style={styles1.sectionText}>Create a new Survey Question</Text>
        </View>
        <View style={styles1.questionSection}>

        {this.state.shareholders.map((shareholder, idx) => (
          <View>
          <Text style={styles1.questionNumber}>{`Question ${idx + 1}`}</Text>
          <TouchableHighlight
          style={styles1.addButton1}
          onPress={this.handleRemoveShareholder(idx)}>
          <Icon style={styles1.buttonText} color="red" name="md-close" size={10} />
          </TouchableHighlight>
          <TextInput style={styles1.form}
          onChangeText={TextInputValue => this.setState({ Holder : TextInputValue }) }
          multiline = {true}
          numberOfLines = {6}
          onBlur={(text) => Alert.alert(text)}
          />  
          </View>
          ))}

        <TouchableHighlight
        style={styles1.addButton}
        onPress={this.AddItemsToArray}>
        <Icon style={styles1.buttonText} name="md-add" size={26} />
        </TouchableHighlight>

        <DatePicker style={styles1.datepicker}
        date={this.state.chosenDate}
        onDateChange={this.setDate}
        confirmBtnText= "Submit"
        cancelBtnText= "Cancel"
        />
        <TouchableHighlight
        style={styles1.inputButton}
        onPress={this.submitQuestion}>
        <Text style={styles1.buttonText}>Submit</Text>
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
      //saveQuestion: question =>
      //dispatch(SurveyQuestionActions.saveQuestion(question)),
    }
  }

  export default connect(null, mapDispatchToProps)(SurveyQuestions)
