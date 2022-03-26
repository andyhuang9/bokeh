import * as React from 'react';
import { Button, View, Text } from 'react-native';
import Card from '../components/Card';
import users from '../../assets/users.js';

let index = 0;

function Home({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Card user={users[index]}/>
        </View>
      );
  }

  export default Home;