import React, { createRef, useState } from 'react';
import {View, StyleSheet, NativeSyntheticEvent} from 'react-native';
import {WebView, WebViewNavigation} from 'react-native-webview';
import { WebViewMessage } from 'react-native-webview/lib/WebViewTypes';


export default function XclarityBrowser() {

  const [webCookie, setWebCookie]=useState<any | null>(null);

  const CHECK_COOKIE = `
  ReactNativeWebView.postMessage("Cookie: " + document.cookie);
  true;
`;

const onNavigationStateChange = (navigationState: WebViewNavigation) => {
  if (webViewRef.current) {
    webViewRef.current.injectJavaScript(CHECK_COOKIE);
  }
};

const onMessage = (event: NativeSyntheticEvent<WebViewMessage>) => {
  const { data } = event.nativeEvent;

  if (data.includes('Cookie:')) {
    var ncoockie = data.split("=").pop();
    console.log(ncoockie);
    setWebCookie(ncoockie);
  }
};

let webViewRef = createRef<WebView>();
/* const LoginWebView: FunctionComponent = () => (
  <WebView
    ref={webViewRef}
    source={{ uri: 'https://google.com/' }}
    onNavigationStateChange={onNavigationStateChange}
    onMessage={onMessage}
  />
); */

  return (
    <View style={styles.backgroundStyle}>
      <WebView
        ref={webViewRef}
        source={{uri: 'https://a548-89-120-77-181.ngrok-free.app/'}}
        style={{flex: 1}}
        injectedJavaScript={`
          const meta = document.createElement('meta'); 
          meta.setAttribute('content', 'width=device-width,initial-scale=1.2, maximum-scale=1.0, user-scalable=0'); 
          meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta); `
          }
          scalesPageToFit={false}
          onNavigationStateChange={onNavigationStateChange}
          onMessage={onMessage}
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