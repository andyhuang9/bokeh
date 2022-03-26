import * as React from 'react';
import { Button, View, Text } from 'react-native';
import Card from '../components/Card';
import users from '../../assets/users.js';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native-web';



function Home({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Card user={users[1]}/>

        </View>
      );
  }

  export default Home;