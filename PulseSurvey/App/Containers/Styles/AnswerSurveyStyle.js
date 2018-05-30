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
    margin:15,
    flex:10
  },
  prevButton: {
    marginRight:20,
    justifyContent:'flex-start'
    
  },
  nextButton: {
    marginLeft:20,
     justifyContent:'flex-end'
  },
  questionInfo: {
    flex: 1, 
    flexDirection: 'row',
    marginTop:10
  },
  question: {
        color: '#70DBDB',
    fontSize: 18,
    margin:12,
    justifyContent:'center'
  },
  questionStyle:{
    color:'white',
    margin:15,
    fontSize:18
  }
})
