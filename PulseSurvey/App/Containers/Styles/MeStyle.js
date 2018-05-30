import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    backgroundColor: Colors.background
  },
  inputButton: {
    borderWidth: 2,
    borderColor: '#00B2EE',
    marginHorizontal: 80,
    height:50,
    marginTop: 20,
    width:260
  },
  buttonText: {
    fontSize: 15,
    marginHorizontal: 60,
    marginVertical: 10,
    color: 'white',
  },
  centered:{
  	alignItems: 'center',
  	marginTop: 150
  }
})
