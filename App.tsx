/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./src/Screens/HomeScreen";
import DashboardScreen from "./src/Screens/DashboardScreen";
import GalleryScreen from "./src/Screens/GalleryScreen";
import IdentifySection from "./src/Screens/IdentifySection";
import NotificationScreen from "./src/Screens/ReminderSection";
import BookPage from "./src/Screens/BooksSection/BookPage";


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const options = (title = "", headerShown = true) => {
  return {
    title: title,
    headerStyle: {
      backgroundColor: "rgb(55, 78, 169)",
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
    },
    headerShown: headerShown,
  };
};

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen}   options={options("Home", false)} />
      
      <Stack.Screen
        name="identify"
        component={IdentifySection}
        options={options("", true)}
      />
       <Stack.Screen
        name="notification"
        component={NotificationScreen}
        options={options("", true)}
      />
       <Stack.Screen
        name="bookPage"
        component={BookPage}
        options={options("", true)}
      />

    </Stack.Navigator>
  );
};

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={options("Home")}
        />
        <Tab.Screen name="Dashboard" component={DashboardScreen} />
          <Tab.Screen
            name="Gallery"
            component={GalleryScreen}
            options={options("Gallery")}
          />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
