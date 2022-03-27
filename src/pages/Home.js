import * as React from 'react';
import { useState } from 'react';
import { Button, View, Text , TouchableWithoutFeedback} from 'react-native';
import Card from '../components/Card';
import users from '../../assets/users.js';



function Home({navigation}) {

  const [count, setCount] = useState(0);

  return (
    <TouchableWithoutFeedback>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Card user={users[count]}/>
        <Button title="Like" onPress={() => setCount(count + 1)} />
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Home;