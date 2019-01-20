import React from 'react'
import {AppRegistry, Text, View} from 'react-native'
import Header from './src/components/Header.js'
import AlbumList from './src/components/AlbumList';

const App = () => (
  <View>
<Header tulistext={'baru'}/>
<AlbumList/>
</View>
);

AppRegistry.registerComponent('baru', () => App);
