// PlantDiseasePrediction.js
import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button } from 'react-native';
import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';
import * as FileSystem from 'react-native-fs';

const PlantDiseasePrediction = () => {
  const [model, setModel] = useState(null);
  const [imageUri, setImageUri] = useState(null);
  const [prediction, setPrediction] = useState('');

  useEffect(() => {
    loadModel();
  }, []);

  const loadModel = async () => {
    try {
      const modelJson = require('./path_to_your_model/plant_disease_model.json');
      const modelWeights = await FileSystem.readAsset(
        'path_to_your_model/plant_disease_model.weights.bin'
      );

      const loadedModel = await tf.loadLayersModel(
        tf.io.fromMemory(modelJson, modelWeights)
      );
      setModel(loadedModel);
    } catch (error) {
      console.error('Error loading the model:', error);
    }
  };

  const predictDisease = async () => {
    if (model && imageUri) {
      const image = Image.resolveAssetSource({ uri: imageUri }).uri;
      const imageTensor = await loadImage(image);
      const predictions = await model.predict(imageTensor);

      // Process predictions and update state
      // You'll need to handle the prediction results based on your model and dataset.
      setPrediction(predictions);
    }
  };

  const loadImage = async (path) => {
    const img = await tf.node.decodeImage(fs.readFileSync(path));
    const expanded = img.expandDims(0);
    img.dispose();
    return expanded;
  };

  return (
    <View>
      <Text>Plant Disease Prediction</Text>
      <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
      <Button title="Select Image" onPress={selectImage} />
      <Button title="Capture Image" onPress={captureImage} />
      <Button title="Predict Disease" onPress={predictDisease} />
      <Text>Prediction: {prediction}</Text>
    </View>
  );
};

export default PlantDiseasePrediction;
