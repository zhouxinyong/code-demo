/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  ListView
}
from 'react-native';

import Movie from './component/movie';

class MovieProject extends Component {

  render() {
    return (
      <Movie />
    )
  }
}



AppRegistry.registerComponent('MovieProject', () => MovieProject);