import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";
import { Card, Button, Icon } from "react-native-elements";

const NotificationScreen = () => {
  const [reminderText, setReminderText] = useState("");
  const [visible, setVisible] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      text: `New plants need water`,
    },
    {
      id: 2,
      text: `New notification rasikaa`,
    },
    {
      id: 3,
      text: `New notification rasikaa`,
    },
    {
      id: 4,
      text: `New notification rasikaa`,
    },
  ]);

  const handleSave = () => {
    if (reminderText.trim() !== "") {
      addNotification(reminderText);
      setReminderText("");
      onClose();
    }
  };

  const onClose = () => {
    setVisible(false);
  };
  const addNotification = (tets) => {
    const newNotification = {
      id: notifications.length + 1,
      text: `tets`,
    };
    setNotifications([newNotification, ...notifications]);
  };

  const clearNotifications = () => {
    setNotifications([]);
  };

  const renderItem = ({ item }) => (
    <View style={styles.notificationItem}>
      <Text style={styles.notificationText}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.containerRow}>
        <TouchableOpacity
          onPress={() => setVisible(true)}
          style={styles.addButton}
        >
          <Icon name="add" color="black" marginRight={10} size={20} />
          <Text>Add Reminder</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={clearNotifications}
          style={styles.clearButton}
        >
          <Icon name="delete" color="black" marginRight={10} size={20} />
          <Text>Clear Reminder</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <Modal animationType="slide" transparent={true} visible={visible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add Reminder</Text>
            <TextInput
              placeholder="Enter your reminder"
              style={styles.input}
              onChangeText={(text) => setReminderText(text)}
              value={reminderText}
            />
            <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onClose} style={styles.cancelButton}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  containerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  addButton: {
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  clearButton: {
    backgroundColor: "#e74c3c",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  notificationItem: {
    backgroundColor: "#f1c40f",
    padding: 16,
    marginBottom: 10,
    borderRadius: 5,
  },
  notificationText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  saveButton: {
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  saveButtonText: {
    color: "white",
    fontSize: 16,
  },
  cancelButton: {
    backgroundColor: "#e74c3c",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  cancelButtonText: {
    color: "white",
    fontSize: 16,
  },
});

export default NotificationScreen;
