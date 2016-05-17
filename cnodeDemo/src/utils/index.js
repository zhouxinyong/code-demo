import React, { Linking } from 'react-native'

const colors =['#E74C3C', '#C0392B', '#1ABC9C',
               '#16A085', '#2ECC71', '#27AE60',
               '#3498DB', '#2980B9', '#9B59B6',
               '#8E44AD', '#34495E', '#2C3E50',
               '#E67E22', '#D35400', '#7F8C8D']

const getRandomNum = (Min, Max) => {
  let Range = Max - Min
  let Rand = Math.random()
  return (Min + Math.round(Rand * Range))
}


export const parseImageUrl = (url) => {
  if (/^\/\/.*/.test(url)) {
    url = `http:${url}`
  }
  return url
}

export const genColor = () => {
  return colors[getRandomNum(0, colors.length - 1)]
}

export const link = (url) => {
  Linking.canOpenURL(url).then((support) => {
      if (support) {
        return Linking.openURL(url)
      }
    })
    .catch((err) => {
      console.error(`an error occured: ${err}`)
    })
}
