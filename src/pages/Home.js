import * as React from 'react';
import { Button, View, Text , TouchableWithoutFeedback} from 'react-native';
import Card from '../components/Card';
import users from '../../assets/users.js';

let index = 0;

function Home({navigation}) {
  const swipeNext = () => {
    index = (index + 1) % 4;
  }
  return (
    <TouchableWithoutFeedback onPress={swipeNext}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Card user={users[index]}/>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Home;