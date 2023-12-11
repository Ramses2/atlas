import React, {useEffect} from "react";
import {View, Text, StyleSheet} from 'react-native';
import firebase  from "@react-native-firebase/app";
import PushNotification, {Importance} from 'react-native-push-notification';
import messaging from "@react-native-firebase/messaging";
import axios from 'axios';
import XclarityBrowser from "./src/components/XclarityBrowser";
import FirstScreen from "./src/components/FirstScreen";

const App=()=> {
  const createChannel=(channelId)=> {
    PushNotification.createChannel(
      {
        channelId: channelId, // (required)
        channelName: "My channel", // (required)
        channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
        playSound: false, // (optional) default: true
        soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
        importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
        vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
      },
      (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
    );  
  }
  const showNotification=(channelId,options)=> {
    PushNotification.localNotification({
      channelId: channelId, // (required) channelId, if the channel doesn't exist, notification will not trigger.
      largeIconUrl: "https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/react-128.png", // (optional) default: undefined
      smallIcon: "ic_notification", // (optional) default: "ic_notification" with fallback for "ic_launcher". Use "" for default small icon.
      bigText: options.bigText, // (optional) default: "message" prop
      subText: options.subText, // (optional) default: none
      bigPictureUrl: options.bigImage, // (optional) default: undefined
      bigLargeIcon: "ic_launcher", // (optional) default: undefined
      bigLargeIconUrl: "https://cdn0.iconfinder.com/data/icons/logos-brands-in-colors/128/react_color-512.png", // (optional) default: undefined
      color: options.color, // (optional) default: system default
      vibrate: true, // (optional) default: true
      vibration: 300, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
      priority: "high", // (optional) set notification priority, default: high
      actions: ["Reply"], // (Android only) See the doc for notification actions to know more
      /* reply_placeholder_text: "Write your response...", // (required)
      reply_button_text: "Reply", // (required) */
      title: options.title, // (optional)
      message: options.message, // (required)
    });
  }

  const sendFcmToken = async () => {
    try {
      console.log('Start')
      await messaging().registerDeviceForRemoteMessages();
      const token = await messaging().getToken();
      console.log('TOKEN:',token);

      //await axios.post('https://fast-peak-31574-d085f7fdfd09.herokuapp.com/register', {token});
      await axios.post('https://ca05-89-120-77-181.ngrok-free.app/register', {token});
    } catch (err) {
      //Do nothing
      console.log(err.response.data);
      return;
    }
  };

  useEffect(()=> {
    /* messaging().getToken(firebase.app().options.messagingSenderId).then((token) => {      
      console.log(`token`, token)

    }) */
    sendFcmToken();
    const unsubscribe=messaging().onMessage(async remoteMsg=> {
      const channelId=Math.random().toString(36).substring(7)
      createChannel(channelId)
      showNotification(channelId, {bigImage: remoteMsg.notification.android.imageUrl,title:remoteMsg.notification.title,message:remoteMsg.notification.body,subText:remoteMsg.data.subtitle})
      console.log('remoteMsg', remoteMsg)
    })
  
    messaging().setBackgroundMessageHandler(async remoteMsg => {
      console.log(`remoteMsg background`, remoteMsg)
    })
    return unsubscribe

  },[])
  
  return (
    <View style={styles.container}>
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

