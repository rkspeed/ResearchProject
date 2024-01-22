import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import CarouselCardItem from "./CarouselCardItem"

const data = [
  {
    id: '1',
    image: require("./../Assests/images/4.jpeg"),
    description: 'Beautiful Sunset',
  },
  {
    id: '2',
    image: require("./../Assests/images/4.jpeg"),
    description: 'Serenity at the Beach',
  },
  // Add more data items here
];

const Slider = () => {
  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <Carousel
      data={data}
      renderItem={CarouselCardItem}
      sliderWidth={300}
      itemWidth={300}
    />
  );
};

const styles = StyleSheet.create({
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 250,
    height: 200,
    borderRadius: 10,
  },
  description: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
    textAlign: 'center',
  },
});

export default Slider;
