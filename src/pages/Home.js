import * as React from 'react';
import { Button, View, Text } from 'react-native';
import Card from '../components/Card';
import users from '../../assets/users.js';



function Home({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Card user={users[3]}/>
          
        </View>
      );
  }

  export default Home;