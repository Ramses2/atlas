import React, {useEffect} from "react";
import {View, Text, StyleSheet} from 'react-native';
import XclarityBrowser from "./src/components/XclarityBrowser";
import FirstScreen from "./src/components/FirstScreen";
import XcalrityPush from "./src/components/XclarityPush";

const App=()=> {
  return (
    <View style={styles.container}>
      <XcalrityPush />
      <XclarityBrowser />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App

