import { createStackNavigator, } from 'react-navigation';
import React from 'react';
import { Image, View, StyleSheet, TouchableHighlight } from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: '语言选择|select language|言語選択',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => navigate('Content', { language: 'zh' })}>
          <Image source={require('./assets/cn.png')} style={{ width: 100, height: 100 }} />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => navigate('Content', { language: 'en' })}>
          <Image source={require('./assets/us.png')} style={{ width: 100, height: 100 }} />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => navigate('Content', { language: 'ja' })}>
          <Image source={require('./assets/jp.png')} style={{ width: 100, height: 100 }} />
        </TouchableHighlight>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
