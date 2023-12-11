import React from 'react';
import {View, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';

export default function XclarityBrowser() {
  return (
    <View style={styles.backgroundStyle}>
      <WebView
        source={{uri: 'https://qa1-xclarityone.lenovo.com'}}
        style={{flex: 1}}
        injectedJavaScript={`
const meta = document.createElement('meta'); 
meta.setAttribute('content', 'width=device-width, initial-scale=1.2, maximum-scale=1.0, user-scalable=0'); 
meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta); `
}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
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