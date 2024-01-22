// screens/DashboardScreen.js
import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Card, Button, Icon } from "react-native-elements";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const Researches = ({ navigation }) => {
  return (
    <Card containerStyle={styles.imageContainer}>
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "column",
          backgroundColor: "transparent",
        }}
      >
        <Text>Researches</Text>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "column",
            backgroundColor: "transparent",
            overflowY: "scroll",
          }}
        >
          <Card containerStyle={styles.imageContainer}>
            <Text>wdwq</Text>
          </Card>
          <Card containerStyle={styles.imageContainer}>
            <Text>wdwq</Text>
          </Card>
          <Card containerStyle={styles.imageContainer}>
            <Text>wdwq</Text>
          </Card>
          <Card containerStyle={styles.imageContainer}>
            <Text>wdwq</Text>
          </Card>
        </View>
      </View>
    </Card>
  );
};
const styles = StyleSheet.create({
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
export default Researches;
