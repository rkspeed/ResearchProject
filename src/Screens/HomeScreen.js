// screens/HomeScreen.js
import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Card, Button, Icon } from "react-native-elements";
// import * as ImagePicker from "expo-image-picker";
import BooksSection from "./BooksSection"
import ResearchSection from "./ResearchSection"
// import VideoListSecition from "./VideoListSecition"


const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const HomeScreen = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const openCaptureModel = async () => {
    navigation.navigate('identify')
    // // No permissions request is necessary for launching the image library
    // let result = await ImagePicker.launchCameraAsync({});

    // console.log(result);

    // if (!result.canceled) {
    //   setImage(result.assets[0].uri);
    // }
  };
  return (
    <ScrollView>
      <View
        style={{
          display: "flex",
        }}
      >
        <Card containerStyle={styles.imageContainer}>
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              backgroundColor: "transparent",
            }}
          >
            <TouchableOpacity onPress={() => openCaptureModel()}>
              <Icon name="search" color="green" marginRight={10} />
              <Text>Identify</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("notification")}>
              <Icon name="notifications-on" color="green" marginRight={10} />
              <Text>Reminder</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log("Image 1")}>
              <Icon name="list-alt" color="green" marginRight={10} />
              <Text>Diagnose</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("bookPage")}>
              <Icon name="library-books" color="green" marginRight={10} />
              <Text>Books</Text>
            </TouchableOpacity>
          </View>
        </Card>
        <BooksSection/>
        <ResearchSection/>
        {/* <VideoListSecition/> */}
      </View>
    </ScrollView>
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
export default HomeScreen;
