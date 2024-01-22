import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Modal } from "react-native";
import { Card, Button, Icon } from "react-native-elements";

const ItemCard = ({ img, title, details }) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Card containerStyle={styles.imageContainer}>
        <Image style={styles.image} resizeMode="cover" source={img} />

        <View style={styles.imageWrapper}>
          <Text style={{ marginBottom: 10, justifyContent: "center" }}>
            {`${title.substring(0, 10)}...`}
          </Text>
        </View>
        <View>
          <Text> {`${details.substring(0, 40)}...`}</Text>
        </View>
        <Button
          icon={<Icon name="code" color="#ffffff" marginRight={10} />}
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
            backgroundColor: "rgb(55, 78, 169)",
          }}
          title="view"
          onPress={() => setVisible(true)}
        />
      </Card>

      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          alert("Modal has been closed.");
          setVisible(!visible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image style={styles.image} resizeMode="cover" source={img} />

            <Text style={styles.modalText}>{title}</Text>
            <Text>{details}</Text>
            <Button
              icon={<Icon name="done" color="white" marginRight={10} />}
              buttonStyle={{
                borderRadius: 0,
                backgroundColor: "rgb(55, 78, 169)",
                alignItems: "flex-end",
                right:0,
                alignContent:'flex-end',
                justifyContent:'flex-end',
                display:'flex',
                marginTop:20
              }}
              title="Done"
              onPress={() => setVisible(false)}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: "90%",
  },
  imageWrapper: {
    margin: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 150,
    height: 120,
    borderRadius: 1,
  },

  // Modal styles

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
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
});

export default ItemCard;
