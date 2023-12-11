import React from 'react';
import {View, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';

export default function XclarityBrowser() {
  return (
    <View style={styles.backgroundStyle}>
      <WebView
        source={{uri: 'https://qa1-xclarityone.lenovo.com'}}
        style={{flex: 1}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 100,
    backgroundColor: '#F0EEEE',
    height: 800,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
});