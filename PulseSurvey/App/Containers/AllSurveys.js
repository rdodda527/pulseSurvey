import React, { Component } from 'react'
import { View, Image, ListView ,ScrollView, Text,TouchableHighlight,FlatList } from 'react-native'
import { connect } from 'react-redux'
import AnswerSurvey from '../Containers/AnswerSurvey'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Images } from '../Themes'

import AllSurveysActions from '../Redux/AllSurveysRedux';
import SurveyDetailsActions from '../Redux/SurveyDetailsRedux';

import SurveyListItem from '../Components/SurveyListItem';
// Styles
import styles from './Styles/LaunchScreenStyles'
import styles1 from './Styles/AllSurveysStyle'
class AllSurveys extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['Food by Victor', 'HP bus time by Shardul']),
      surveys:props.surveys,
    };
  }
  goNext = () => {
    const { navigate } = this.props.navigation;
    navigate('AnswerSurvey');
  }

  componentDidMount() {
    this.props.getSurveys();
  }

  renderRow = (survey) => {
    return (
      <View style={styles.row}>
        <SurveyListItem  onPress={this.handleSurveyPress} survey={survey.item} />
      </View>
    )
  }

  handleSurveyPress = (evt, item) =>{
    alert(JSON.stringify(item))
    this.props.openSurvey(item);
  }

  keyExtractor = (item, index) => index

  oneScreensWorth = 20

render() {
    return (
      <View style={styles.mainContainer}>
      <ScrollView style={styles.container}>
        <View style={styles.centered}>
          <Text style={styles1.sectionText}>All Surveys</Text>
        </View>
        <FlatList
          contentContainerStyle={styles.listContent}
          data={this.props.surveys}
          renderItem={this.renderRow}
          keyExtractor={this.keyExtractor}
          initialNumToRender={this.oneScreensWorth}
        />
        </ScrollView>
      </View>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    surveys: state.allsurveys.surveys,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
     getSurveys : () => dispatch(AllSurveysActions.allSurveysRequest()),
     openSurvey: survey => dispatch(SurveyDetailsActions.surveySelect(survey)), 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllSurveys)
