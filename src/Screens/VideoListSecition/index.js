// screens/DashboardScreen.js
import React from "react";
import { View, Text, StyleSheet, Dimensions,Image } from "react-native";
import { Card, Button, Icon } from "react-native-elements";
import { Card as CardNew, Title, Paragraph } from "react-native-paper";
import VideoListScreen from "../../Components/VideoListScreen";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;
const researchPapers = [
  {
    title: "Paper 1",
    description: "Description of Paper 1",
    imageSource: require("./../../Assests/images/8.jpeg"),
  },
  {
    title: "Paper 2",
    description: "Description of Paper 2",
    imageSource: require("./../../Assests/images/9.jpeg"),
  },
  // Add more research papers here
];

const index = ({ navigation }) => {
  return (
    <Card containerStyle={styles.imageContainer}>
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "column",
          backgroundColor: "transparent",
        }}
      >
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>Vedios</Text>
        <View style={{ marginTop: 20, marginBottom: 20 }}>
        <VideoListScreen/>
        </View>
      </View>
    </Card>
  );
};
const styles = StyleSheet.create({
  card: {
    margin: 10,
    borderRadius: 10,
    elevation: 4,
  },

  imageContainer: {
    width: "90%",
  },
  img: {
    height: screenHeight,
    width: screenWidth,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    padding: 10,
  },
});
export default index;
