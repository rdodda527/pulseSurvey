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
  questionSection:{
  	marginTop:50,
  	marginHorizontal:10
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
  },
  addButton1: {
    borderWidth:1,
    borderColor: 'red',
    alignItems:'center',
    justifyContent:'center',
    width:16,
    height:16,
    borderRadius:100,
  },
  form: {
    backgroundColor: 'white',
    borderBottomColor: '#000000',
    borderBottomWidth: 1, 
    marginBottom:10,
    marginTop: 10
  },
  datepicker: {
    backgroundColor: 'white',
    height:40,
    marginTop: 10
  },
  dropdown: {
    backgroundColor: 'white',
    marginBottom: 10
  },
  questionNumber: {
    color: 'white'
  },
  addButton: {
    borderWidth:1,
    borderColor: '#00B2EE',
    alignItems:'center',
    justifyContent:'center',
    width:30,
    height:30,
    borderRadius:100,
  }
})
