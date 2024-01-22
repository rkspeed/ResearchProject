import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
// import VideoPlayer from './VideoPlayer'; // Your video playback component
import LinkPreview from "react-native-link-preview";

const videosData = [
  {
    id: "1",
    title: "Video 1",
    videoUrl: "https://www.youtube.com/watch?v=yxmwVG7Dy1A",
  },
  {
    id: "2",
    title: "Video 2",
    videoUrl: "https://www.youtube.com/watch?v=yxmwVG7Dy1A",
  },
  // Add more video objects here...
];

const VideoListScreen = () => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    generateThumbnail();
    LinkPreview.getPreview("https://www.youtube.com/watch?v=MejbOFk7H6c", {
      imagesPropertyType: "og", // fetches only open-graph images
    }).then((data) => {
      setImage(data.images);
      console.log(data.images);
    });
  });


  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => openVideoPlayer(item)}>
      <View>
        <Text>{item.title}</Text>
        <Image style={{ width: 50, height: 50 }} source={{ uri: image[0] }} />
      </View>
    </TouchableOpacity>
  );

  const openVideoPlayer = (video) => {
    // Implement logic to open the video player screen or modal
    // Pass the selected video data to the VideoPlayer component
  };

  return (
    <FlatList
      data={videosData}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
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
export default VideoListScreen;
