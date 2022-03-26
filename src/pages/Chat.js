import * as React from 'react';
import { View, Text } from 'react-native';
import Match from '../components/Match';

let gojo = require("../../assets/gojo.jpg");
let lelouch = require("../../assets/lelouch.jpg");

function Chat() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
        <Match matchName="Gojo Satoru" avatarFile={gojo} notifBool={true}/>
        <Match matchName="Lelouch vi Britannia" avatarFile={lelouch} notifBool={false}/>
      </View>
    );
  }

  export default Chat;