import React, {
  NetInfo,
  AppState,
  Platform
} from 'react-native'
import codePush from 'react-native-code-push'

export const shouldSync = () => {
  return  NetInfo.fetch()
            .then((data) => {
              if (__DEV__) {
                return false
              } else if (Platform.OS === 'ios') {
                return data === 'wifi'
              } else if () {
                return ['WIFI', 'VPN'].indexOf(data) > -1
              }
            })
}

export const sync = () => {
  shouldSync().done((shouldSync) => {
    return shouldSync && codePush.sync()
  })
}
