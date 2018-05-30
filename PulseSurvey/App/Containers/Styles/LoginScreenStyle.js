import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'
import Colors from '../../Themes/Colors'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    height:659,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.bgBlue,
  },
  bg: {
    backgroundColor: Colors.fire,
  },
  titleView: {
    flex: 0.4,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  centered: {
    alignItems: 'center'
  },
  titleText: {
    color: 'white',
    flex: 0.5,
    fontSize: 35,
    letterSpacing: 4,
    marginTop:-40
  },
  loginView: {
    paddingHorizontal:30,
    marginTop:20
  },
  pulseImage: {
    height: 150,
    marginTop: 70,
    marginLeft:50,
  },
  inputButton: {
    borderWidth: 1,
    borderColor: '#00B2EE',
    marginHorizontal: 80,
    height:50,
    marginTop: 60
  },
  buttonText: {
    fontSize: 25,
    marginHorizontal: 35,
    marginVertical: 8,
    color: 'white',
    fontWeight: 'bold'
  }
})