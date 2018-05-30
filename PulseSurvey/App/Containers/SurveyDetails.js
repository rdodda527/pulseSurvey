import React, { Component } from 'react'
import { Image, View, ScrollView, Text,TextInput,TouchableHighlight} from 'react-native'
import { connect } from 'react-redux'
import DatePicker from 'react-native-datepicker'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import styles from './Styles/LaunchScreenStyles'
// Styles
import styles1 from './Styles/SurveyDetailsStyle'
import { Images } from '../Themes'
import Icon from 'react-native-vector-icons/Ionicons';
import {SurveyQuestions} from '../Components/SurveyQuestions'
import FormDesc from '../Components/FormDesc'

import LoginActions from '../Redux/LoginRedux';
import SurveyDetailsActions from '../Redux/SurveyDetailsRedux';
import Reactotron from 'reactotron-react-native';

class SurveyDetails extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      chosenDate: new Date(), 
      questions: [],
      name: ''
    }
 }

   componentDidMount() {

  }

  handleInputChange = (text, i) => {
     let questions = [...this.state.questions];
     questions[i] = text;
     this.setState({ questions });
  }

  setDate = (newDate) => {
    this.setState({chosenDate: newDate})
  }

  handleInputRemove(i,event){
      this.setState({
        questions: this.state.questions.filter((s, sidx) => i !== sidx)
      });  
  }

  AddQuestionsToArray = () => {
    this.setState(prevState => ({ questions: [...prevState.questions, '']}))
  }

  submitQuestion = () => {
     this.props.saveSurvey(this.state.name,this.state.questions,this.state.chosenDate)
  }

  render () {
    const questionComponents = this.state.questions.map((el,i) => (
    <View key={i} style={{flex:1,flexDirection: 'row'}}>
      <TextInput
        style={styles1.form}
        multiline = {true}
        numberOfLines = {6}
        value={this.state.questions[i]}
        onChangeText={(txt)=>this.handleInputChange(txt, i)}
      />
      <TouchableHighlight
      style={styles1.closeButton}
      onPress={this.handleInputRemove.bind(this,i)}>
        <Icon color="white" name="md-close" size={18} />
      </TouchableHighlight>
    </View>
    ))
    return (
      <View style={styles.mainContainer}>
          <ScrollView style={styles.container}>
            <View style={styles.centered}>
              <Text style={styles1.sectionText}>New Survey Details</Text>
            </View>
            <View>

              <Text style={styles1.inputDesc}>Survey Name:</Text>
              <TextInput
                style={styles1.form}
                onChangeText={(name) => this.setState({name})}
              />
              <Text style={styles1.inputDesc}>Survey Questions:</Text>
               { questionComponents }
              <TouchableHighlight
              style={styles1.addButton}
              onPress={this.AddQuestionsToArray}>
              <Icon color="white" name="md-add" size={18} />
              </TouchableHighlight>
              <Text style={styles1.inputDesc}>Survey End Date:</Text>
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
  saveSurvey :(name, questions, date) => dispatch(SurveyDetailsActions.surveyDetailsRequest(name, questions, date)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SurveyDetails)
