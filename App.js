import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Expo from 'expo';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Start',
    };
  }

  onPress = () => {
    let text = this.state.text;
    if (text === 'Start') {
      this.setState({ text: '0' });
      Expo.Speech.speak('0', { language: 'en-us' });
    } else {
      text = Number.parseInt(text) + 1;
      this.setState({ text });
      Expo.Speech.speak(text.toString(), { language: 'en-us' });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.number} onPress={this.onPress}>{this.state.text}</Text>
      </View >
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
  number: {
    fontSize: 130,
    fontWeight: 'bold',
  },
});
