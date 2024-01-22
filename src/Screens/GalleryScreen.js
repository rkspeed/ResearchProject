import React, { useState } from "react";
import {
  View,
  ScrollView,
  TextInput,
  StyleSheet,
  Text,
  Modal,
  TouchableOpacity,
  Image,
} from "react-native";
import { Button } from "react-native-elements";
import { Card, Icon } from "react-native-elements";
import ItemCard from "./../Components/ItemCard";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
const images = [
  {
    id: 1,
    src: require("./../Assests/images/1.jpeg"),
    title: "Anthurium andreanum ",
    details: "Common flamingo flower with red (or other color) blossoms.",
  },
  {
    id: 2,
    src: require("./../Assests/images/2.jpeg"),
    title: "Anthurium clarinervium",
    details: "Deep green heart-shape leaves with white veins (above)",
  },
  {
    id: 3,
    src: require("./../Assests/images/3.jpeg"),
    title: "Anthurium crystallinum ",
    details: "Deep green leaves with striking white veins.  ",
  },
  {
    id: 4,
    src: require("./../Assests/images/4.jpeg"),
    title: "Anthurium crystallinum ",
    details: "Deep green leaves with striking white veins.  ",
  },
  {
    id: 5,
    src: require("./../Assests/images/5.jpg"),
    title: "Anthurium warocqueanum",
    details: "Very elongated green leaves with white veins.",
  },
  {
    id: 6,
    src: require("./../Assests/images/6.jpeg"),
    title: "Anthurium regale",
    details:
      "Large green leaves up to 3 feet across have contrasting white veins.",
  },
  {
    id: 7,
    src: require("./../Assests/images/1.jpeg"),
    title: "Anthurium andreanum ",
    details: "Common flamingo flower with red (or other color) blossoms.",
  },
  {
    id: 8,
    src: require("./../Assests/images/2.jpeg"),
    title: "Anthurium clarinervium",
    details: "Deep green heart-shape leaves with white veins (above)",
  },
  {
    id: 9,
    src: require("./../Assests/images/3.jpeg"),
    title: "Anthurium crystallinum ",
    details: "Deep green leaves with striking white veins.  ",
  },
  {
    id: 10,
    src: require("./../Assests/images/4.jpeg"),
    title: "Anthurium crystallinum ",
    details: "Deep green leaves with striking white veins.  ",
  },
  {
    id: 21,
    src: require("./../Assests/images/5.jpg"),
    title: "Anthurium warocqueanum",
    details: "Very elongated green leaves with white veins.",
  },
  {
    id: 32,
    src: require("./../Assests/images/6.jpeg"),
    title: "Anthurium regale",
    details:
      "Large green leaves up to 3 feet across have contrasting white veins.",
  },
  {
    id: 12,
    src: require("./../Assests/images/1.jpeg"),
    title: "Anthurium andreanum ",
    details: "Common flamingo flower with red (or other color) blossoms.",
  },
  {
    id: 23,
    src: require("./../Assests/images/2.jpeg"),
    title: "Anthurium clarinervium",
    details: "Deep green heart-shape leaves with white veins (above)",
  },
  {
    id: 34,
    src: require("./../Assests/images/3.jpeg"),
    title: "Anthurium crystallinum ",
    details: "Deep green leaves with striking white veins.  ",
  },
  {
    id: 15,
    src: require("./../Assests/images/4.jpeg"),
    title: "Anthurium crystallinum ",
    details: "Deep green leaves with striking white veins.  ",
  },
  {
    id: 26,
    src: require("./../Assests/images/5.jpg"),
    title: "Anthurium warocqueanum",
    details: "Very elongated green leaves with white veins.",
  },
  {
    id: 37,
    src: require("./../Assests/images/6.jpeg"),
    title: "Anthurium regale",
    details:
      "Large green leaves up to 3 feet across have contrasting white veins.",
  },
];

const GalleryScreen = () => {
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await launchImageLibrary({
      // mediaTypes: ImagePicker.MediaTypeOptions.All,
      // allowsEditing: true,
      // aspect: [4, 3],
      // quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.fixToText}>
        <Button
          title="Add to Gallery"
          onPress={() => setVisible(true)}
          style={styles.addToGallery}
        />
      </View>
      <View style={styles.imageContainer}>
        {images.map((image) => (
          <View key={image.id} style={styles.imageWrapper}>
            <ItemCard
              img={image.src}
              title={image.title}
              details={image.details}
            />
          </View>
        ))}
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          setVisible(!visible);
        }}
        swipeDirection="down"
        style={{
          justifyContent: "flex-end",
          height: 500,
          flex: 1,
          display: "flex",
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Add Item To your Gallery</Text>
            <TextInput
              style={styles.input}
              onChangeText={() => setTitle("hvghj")}
              value={title}
              placeholder="Enter Title"
              keyboardType="text"
            />
            <TextInput
              style={styles.inputdescription}
              editable
              multiline
              numberOfLines={5}
              maxLength={40}
              placeholder="Enter Description"
              // onChangeText={text => onChangeText(text)}
              // value={value}
            />
            <Text style={styles.modalText}>Upload image</Text>
            {!image && (
              <TouchableOpacity onPress={pickImage}>
                <Icon name="image" color="black" marginRight={10} size={150} />
              </TouchableOpacity>
            )}

            {image && (
              <>
                <Image
                  source={{ uri: image }}
                  style={{ width: 200, height: 200 }}
                />
                <TouchableOpacity onPress={() => setImage(null)}>
                  <Icon name="close" color="black" marginRight={10} size={50} />
                </TouchableOpacity>
              </>
            )}

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: 300,
              }}
            >
              <Button
                icon={<Icon name="save" color="white" marginRight={10} />}
                buttonStyle={{
                  borderRadius: 0,
                  backgroundColor: "rgb(55, 78, 169)",
                  alignItems: "center",
                  justifyContent: "center",
                  right: 0,
                  alignContent: "flex-end",

                  display: "flex",
                  marginTop: 20,
                  width: 140,
                }}
                title="Save"
                onPress={() => {
                  setVisible(false);
                  setImage(null);
                }}
              />
              <Button
                icon={<Icon name="close" color="white" marginRight={10} />}
                buttonStyle={{
                  borderRadius: 0,
                  backgroundColor: "gray",
                  alignItems: "center",
                  justifyContent: "center",
                  right: 0,
                  alignContent: "flex-end",

                  display: "flex",
                  marginTop: 20,
                  width: 140,
                }}
                title="Close"
                onPress={() => {
                  setVisible(false);
                  setImage(null);
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "column",
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginRight: 10,
    marginVertical: 20,
  },

  imageContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    justifyContent: "space-between",
  },
  imageWrapper: {
    margin: 0,
    alignItems: "center",
    width: "48%",
  },
  addToGallery: {
    backgroundColor: "rgb(55, 78, 169)",
  },
  // Modal styles

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 300,
  },
  inputdescription: {
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 300,
  },
  // modal container

  modalContainer: {
    height: "100%",
    justifyContent: "flex-end",
  },
});

export default GalleryScreen;
