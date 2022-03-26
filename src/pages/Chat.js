import * as React from 'react';
import { View, Text } from 'react-native';
import Match from '../components/Match';

let gojo = {
  name: "Gojo Satoru",
  avatar: require("../../assets/gojo.jpg"),
  notif: true,
}
let lelouch = {
  name: "Lelouch vi Britannia",
  avatar: require("../../assets/lelouch.jpg"),
  notif: false,
}

function Chat() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
        <Match matchName={gojo.name} avatarFile={gojo.avatar} notifBool={gojo.notif}/>
        <Match matchName={lelouch.name} avatarFile={lelouch.avatar} notifBool={lelouch.notif}/>
      </View>
    );
  }

  export default Chat;