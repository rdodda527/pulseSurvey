import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    backgroundColor: Colors.background
  },
  sectionText:{
  	marginTop:50,
  	color: 'white',
  	fontSize: 20,
  },
    form: {
    backgroundColor: 'white',
    borderBottomColor: '#000000',
    borderBottomWidth: 1, 
    margin:10,
    height: 30,
    width:300
  },
  inputDesc:{
  	 marginTop:40,
  	 marginLeft: 10,
  	color: 'white'
  },
    datepicker: {
    backgroundColor: 'white',
    height:40,
  	margin: 10,
  },
    inputButton: {
    borderWidth: 1,
    borderColor: '#00B2EE',
    marginHorizontal: 80,
    height:50,
    marginTop: 60
  },
    buttonText: {
    fontSize: 20,
    marginHorizontal: 60,
    marginVertical: 8,
    color: 'white',
  }
})
