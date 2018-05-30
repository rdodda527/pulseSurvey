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
    color: 'white',
    borderBottomColor: 'white',
    borderBottomWidth: 1, 
    margin:10,
    height: 35,
    width:300,
    flex:10
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
    color: 'white'
  },
    closeButton: {
    marginRight:5,
    marginTop:10,
    backgroundColor:'red',
    width:30,
    height:30,
    alignItems: 'center',
    flex:1,
    justifyContent:'center',
    borderRadius:3
  },
  addButton: {
    marginRight:5,
    marginTop:10,
    backgroundColor:'green',
    width:80,
    height:30,
    alignItems: 'center',
    flex:1,
    justifyContent:'center',
    borderRadius:3,
    alignSelf:'flex-end'
  }
})
