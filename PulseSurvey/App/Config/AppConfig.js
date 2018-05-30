// Simple React Native specific changes

import '../I18n/I18n'

const apiUrl = 'https://apps.api.nextjump.com'
const localhostUrl = 'http://172.28.128.17:8081'

export default {
  // font scaling override - RN default is on
  allowTextFontScaling: true,

  baseUrl: localhostUrl,
}