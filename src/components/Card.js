import React from 'react';
import {SafeAreaView, ScrollView, Image, Text, ImageBackground, View, StyleSheet, FlatList} from 'react-native';

const Card = props => {
  const {name, image, bio} = props.user;
  return (
    <ScrollView>
      <View style={styles.card}>
      <Image
        source={{
          uri: image,
        }}
        style={styles.image}>
          </Image>
        <View style={styles.cardInner}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.bio}>{bio}</Text>
          <Text style={styles.bio}>alskdjfhslkdfjglksjhfdlgsldfkjhglskdjfhgslkjhdflkghslfjkhglskjdfhlsldg</Text>
        </View>
    </View>
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  card: {
    width: '30%',
    height: '30%',
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
    width: '90%',
    height: '100%',
    borderRadius: 10,
    overflow: 'hidden',

    justifyContent: 'flex-end',
  },
  cardInner: {
    padding: 10,
  },
  name: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 18,
    color: 'white',
    lineHeight: 25,
  },
});

export default Card;

