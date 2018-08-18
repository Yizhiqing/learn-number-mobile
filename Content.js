import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Expo from 'expo';
export default class ContentScreen extends React.Component {
  constructor(props) {
    super(props);
    const { navigation } = this.props;
    const language = navigation.getParam('language');
    let start = 'Start';
    if (language === 'zh') {
      start = '开始';
    } else if (language === 'ja') {
      start = '開始';
    }

    this.state = {
      text: start,
      language
    };
  }

  onPress = () => {
    let text = this.state.text;
    let language = this.state.language;
    if (isNaN(text)) {
      this.setState({ text: '0' });
      Expo.Speech.speak('0', { language });
    } else {
      text = Number.parseInt(text) + 1;
      this.setState({ text });
      Expo.Speech.speak(text.toString(), { language });
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
