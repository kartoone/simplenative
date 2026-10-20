import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Home</Text>
      <Text style={styles.body}>This is the Home tab.</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Details</Text>
      <Text style={styles.body}>This screen is pushed onto the Home stack.</Text>
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.body}>This is the Settings tab.</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
    </View>
  );
}

function AboutScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>About</Text>
      <Text style={styles.body}>This screen is pushed onto the Settings stack.</Text>
    </View>
  );
}

const ICE_CREAM_FLAVORS = ['Vanilla', 'Chocolate', 'Strawberry', 'Mint Chip'];
const HOT_COFFEES = ['Espresso', 'Americano', 'Latte', 'Cappuccino'];

function IceCreamScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>🍦 Ice Cream</Text>
      <Text style={styles.body}>Pick a flavor:</Text>
      {ICE_CREAM_FLAVORS.map((flavor) => (
        <Text key={flavor} style={styles.item}>{flavor}</Text>
      ))}
    </View>
  );
}

function HotCoffeeScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>☕ Hot Coffee</Text>
      <Text style={styles.body}>Pick a drink:</Text>
      {HOT_COFFEES.map((coffee) => (
        <Text key={coffee} style={styles.item}>{coffee}</Text>
      ))}
    </View>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

function SettingsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator>
  );
}

function IceCreamStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="IceCream" component={IceCreamScreen} options={{ title: 'Ice Cream' }} />
    </Stack.Navigator>
  );
}

function HotCoffeeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HotCoffee" component={HotCoffeeScreen} options={{ title: 'Hot Coffee' }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="HomeTab" component={HomeStack} />
          <Tab.Screen name="SettingsTab" component={SettingsStack} />
          <Tab.Screen name="IceCreamTab" component={IceCreamStack} />
          <Tab.Screen name="HotCoffeeTab" component={HotCoffeeStack} />
        </Tab.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  body: {
    fontSize: 16,
    marginBottom: 16,
  },
  item: {
    fontSize: 18,
    marginBottom: 6,
  },
});
