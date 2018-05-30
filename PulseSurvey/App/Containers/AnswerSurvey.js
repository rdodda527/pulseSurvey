import React, { Component } from 'react'
import { View, ScrollView, Text, FlatList,TouchableHighlight,TextInput } from 'react-native'
import { connect } from 'react-redux'
import SurveyDetailsActions from '../Redux/SurveyDetailsRedux';
import EmployeeRoasterActions from '../Redux/EmployeeRoasterRedux';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import UserListItem from '../Components/UserListItem';
// Styles

import styles from './Styles/LaunchScreenStyles'
import styles1 from './Styles/AnswerSurveyStyle'
import Icon from 'react-native-vector-icons/Ionicons';

class AnswerSurvey extends Component {
   constructor (props) {
     super(props)
   this.state = {employees:props.employees,
     i:0,
     answer:[],}
   }

  componentDidMount(){
    alert(Object.keys(this.props.answerquestions).length)
    this.props.getEmployeeRoaster();
  }

   renderRow = (employee) => {
    return (
      <View style={styles.row}>
        <UserListItem  onPress={this.handleSurveyPress} employee={employee.item} />
      </View>
    )
  }

  handleSurveyPress = (evt, item) =>{
    alert(JSON.stringify(item))
    this.props.openSurvey(item);
  }

  keyExtractor = (item, index) => index

  oneScreensWorth = 20

  goNext= () => {
  this.setState({ i: (this.state.i + 1) });
}
  
  goPrev = () => {
    this.setState({ i : (this.state.i - 1)});
  }

  render () {
    const {goBack} = this.props.navigation;
    const question = this.props.answerquestions[this.state.i];
    const roaster = this.props.answerquestions[this.state.i].Emp;
    const answer = roaster? ( <FlatList
          contentContainerStyle={styles.listContent}
          data={this.props.employees}
          renderItem={this.renderRow}
          keyExtractor={this.keyExtractor}
          initialNumToRender={this.oneScreensWorth}
        />

      ) : ( <TextInput
        style={styles1.form}
        multiline = {true}
        numberOfLines = {6}
        placeholder = "Enter your response here..."
        placeholderTextColor = '#808080'
      />
      );
    return (
      <View style={styles.mainContainer}>
      <ScrollView style={styles.container}>
        <View style={styles.centered}>
                  <TouchableHighlight
          onPress={() => goBack()}>
          <Text> Back </Text>
              </TouchableHighlight>
          <Text style={styles1.sectionText}>Take the Survey</Text>
          <View style={styles1.questionInfo}>
          <TouchableHighlight style={styles1.prevButton} onPress={this.goPrev}>
                        <Icon color="#70DBDB" name="md-arrow-dropleft" size={50} />
          </TouchableHighlight>
          <Text style={styles1.question}>Question {this.state.i + 1} of {Object.keys(this.props.answerquestions).length}</Text>
          <TouchableHighlight style={styles1.nextButton} onPress={this.goNext}>
                        <Icon color="#70DBDB" name="md-arrow-dropright" size={50} />
          </TouchableHighlight>
          </View>
        </View>
        <View style={styles.centered}>
         <Text style={styles1.questionStyle}>{question.Question}</Text>
        </View>
        {answer}

     </ScrollView>
      </View>
    )
  }
}


  function DisplayUser(props){
    return (
              <FlatList
          contentContainerStyle={styles.listContent}
          data={this.props.employees}
          renderItem={this.renderRow}
          keyExtractor={this.keyExtractor}
          initialNumToRender={this.oneScreensWorth}
        />

    );
  }

    function DisplayText(props){
    return (

      <TextInput
        style={styles1.form}
        multiline = {true}
        numberOfLines = {6}

      />

    );
  }
  
const mapStateToProps = (state) => {
  return {
    answerquestions: state.surveydetails.answerquestions,
    employees: state.employeeroaster.employees
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getEmployeeRoaster: () => dispatch(EmployeeRoasterActions.employeeRoasterRequest()),

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnswerSurvey)
