// screens/DashboardScreen.js
import React from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import { Card, Button, Icon } from "react-native-elements";
import { Card as CardNew, Title, Paragraph } from "react-native-paper";

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
  {
    title: "Paper 2",
    description: "Description of Paper 2",
    imageSource: require("./../../Assests/images/9.jpeg"),
  },
  {
    title: "Paper 2",
    description: "Description of Paper 2",
    imageSource: require("./../../Assests/images/9.jpeg"),
  },
  {
    title: "Paper 2",
    description: "Description of Paper 2",
    imageSource: require("./../../Assests/images/9.jpeg"),
  },
  // Add more research papers here
];

const BookPage = ({ navigation }) => {
  return (
    <ScrollView>
      <Card containerStyle={styles.imageContainer}>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "column",
            backgroundColor: "transparent",
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>Recent Book</Text>
          <View style={{ marginTop: 20, marginBottom: 20 }}>
            {researchPapers.map((paper, index) => (
              <CardNew style={styles.card}>
                <CardNew.Cover source={paper.imageSource} />
                <CardNew.Content>
                  <Title>{paper.title}</Title>
                  <Paragraph>{paper.description}</Paragraph>
                </CardNew.Content>
              </CardNew>
            ))}
          </View>
        </View>
      </Card>
    </ScrollView>
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
export default BookPage;
