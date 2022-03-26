import React from 'react';
import {SafeAreaView, ScrollView, Image, Text, ImageBackground, View, StyleSheet, FlatList} from 'react-native';

const Card = props => {
  const {name, image, bio} = props.user;
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}} style={styles.card}>
      {/* <View style={styles.card}> */}
      <ImageBackground
        source={{
          uri: image,
        }}
        style={styles.image}>

        <View style={styles.cardInner}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.bio}>{bio}</Text>
          <Text style={styles.bio}>alskdjfhslkdfjglksjhfdlgsldfkjhglskdjfhgslkjhdflkghslfjkhglskjdfhlsldg</Text>
        </View>
      </ImageBackground>
      <ImageBackground
        source={{
          uri: image,
        }}
        style={styles.image}>

        <View style={styles.cardInner}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.bio}>{bio}</Text>
          <Text style={styles.bio}>alskdjfhslkdfjglksjhfdlgsldfkjhglskdjfhgslkjhdflkghslfjkhglskjdfhlsldg</Text>
        </View>
      </ImageBackground>
    {/* </View> */}
    </ScrollView>

    // <ScrollView scrollEventThrottle={16}>
    //   <Text>
    //     Hello There
    //   </Text>
      
    // </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  card: {
    width: '90%',
    height: '90%',
    borderRadius: 10,
    backgroundColor: '#fefefe',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  cardInner: {
    padding: 10,
  },
  name: {
    fontSize: 30,
    color: 'orange',
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 18,
    font:'Montserrat',
    color: 'black',
    lineHeight: 25,
  },
});

export default Card;

