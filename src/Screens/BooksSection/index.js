import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";
import { Card, Button, Icon } from "react-native-elements";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const data = [
  {
    id: "1",
    image: require("./../../Assests/images/1.jpeg"),
    description: "Beautiful Sunset",
  },
  {
    id: "2",
    image: require("./../../Assests/images/2.jpeg"),
    description: "Serenity at the Beach",
  },
  {
    id: "2",
    image: require("./../../Assests/images/3.jpeg"),
    description: "Serenity at the Beach",
  },
  {
    id: "2",
    image: require("./../../Assests/images/4.jpeg"),
    description: "Serenity at the Beach",
  },
  {
    id: "2",
    image: require("./../../Assests/images/5.jpg"),
    description: "Serenity at the Beach",
  },
  // Add more data items here
];

const Index = () => {
  const isCarousel = React.useRef(null);
  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <Card containerStyle={styles.imageContainer}>
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "column",
          backgroundColor: "transparent",
          overflow: "hidden",
        }}
      >
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>Recent Books</Text>
        <View style={{ marginTop: 20, marginBottom: 20 }}>
          <Carousel
            layout="default"
            layoutCardOffset={9}
            ref={isCarousel}
            data={data}
            renderItem={renderItem}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
            inactiveSlideShift={0}
            useScrollView={true}
            style={{ backgroundColor: "red" }}
          />
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: "90%",
  },
  slide: {
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
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
    padding: 10,
    margin: 10,
  },
  description: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
    textAlign: "center",
  },
});

export default Index;
