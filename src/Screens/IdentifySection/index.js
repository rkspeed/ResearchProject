// screens/DiseaseDetectionScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-react-native';

const DiseaseDetectionScreen = () => {
  const [imageUri, setImageUri] = useState(null);
  const [prediction, setPrediction] = useState('');
  const [model, setModel] = useState(null);

  useEffect(() => {
    // Load the pre-trained model when the component mounts
    loadModel();
  }, []);

  const loadModel = async () => {
    try {
      const model = await tf.loadLayersModel('./model.json');
      setModel(model);
    } catch (error) {
      console.error('Error loading the model:', error);
    }
  };

  const selectImage = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel || response.error) {
        // Handle cancellation or error
      } else {
        setImageUri(response.uri);
      }
    });
  };

  const detectDisease = async () => {
    if (model && imageUri) {
      try {
        const image = await tf.node.decodeImage(imageUri);
        const resizedImage = tf.image.resizeBilinear(image, [224, 224]); // Adjust dimensions based on your model's input size
        const expandedImage = resizedImage.expandDims(0); // Add batch dimension

        // Perform disease prediction
        const predictions = await model.predict(expandedImage);

        // Process and display the prediction results
        const predictedClass = predictions.argMax(1).dataSync()[0];
        const predictedClassName = getClassName(predictedClass); // Implement this function

        setPrediction(predictedClassName);

        // Clean up resources
        image.dispose();
        resizedImage.dispose();
        expandedImage.dispose();
        predictions.dispose();
      } catch (error) {
        console.error('Error predicting disease:', error);
      }
    }
  };

  const getClassName = (classIndex) => {
    // Implement a mapping between class indices and class names based on your model's setup
    // For example:
    const classNames = ['Healthy', 'Bacterial Blight', 'Other Diseases'];
    return classNames[classIndex];
  };

  return (
    <View>
      <Text>Disease Detection</Text>
      {imageUri && <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />}
      <Button title="Select Image" onPress={selectImage} />
      <Button title="Detect Disease" onPress={detectDisease} />
      <Text>Prediction: {prediction}</Text>
    </View>
  );
};

export default DiseaseDetectionScreen;
