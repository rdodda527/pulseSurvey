import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'
import colors from '../../Themes/Colors';
export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin,
        backgroundColor: 'black'
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  centered: {
    alignItems: 'center'
  },
    form: {
    backgroundColor: colors.snow,
    minHeight: 75,
    fontSize: 14,
    paddingLeft: 10,
    paddingRight: 10,
    color: colors.charcoal,
  }
})
