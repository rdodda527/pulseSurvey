import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    backgroundColor: Colors.background
  },
  row: {
    flex: 1,
    backgroundColor: Colors.neonBlue,
    justifyContent: 'center'
  },
  boldLabel: {
    fontWeight: 'bold',
    alignSelf: 'center',
    color: Colors.snow,
    textAlign: 'center',
  },
  label: {
    textAlign: 'center',
    color: Colors.snow
  },
  listContent: {
  },
    sectionText:{
    marginTop:50,
    color: 'white',
    fontSize: 20,
  },
})
