import { StyleSheet } from 'react-native';
import {Fonts, Metrics, Colors} from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    height: 70,
    borderBottomWidth: 1,
    borderBottomColor: '#696969',
  },
  userItem: {
  	flex: 1,
  	flexDirection: 'row',
  	alignItems: 'center',
  },
  userPicContainer: {
  	flex: 3,
    flexDirection: 'column',
    alignItems: 'center',
  },
  nxjProfilePicContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  userNameContainer: {
  	flex: 7,
  },
  userNameText: {
  	fontSize: 18,
  	color: 'white',
  },
})