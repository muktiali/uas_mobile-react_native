import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/EvilIcons';
import HomeScreen from './Home';
import DetailScreen from './Detail';
import ProfileScreen from './Profile';

const Stack1 = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
      headerLeft: (
        <View style={{ paddingLeft: 21 }}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Icon name="navicon" size={27} />
          </TouchableOpacity>
        </View>
      ),
    }),
  },
  Detail: {
    screen: DetailScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Detail',
    }),
  },
});

const Stack2 = StackNavigator({
  Profile: {
    screen: ProfileScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Profile',
      headerLeft: (
        <View style={{ paddingLeft: 21 }}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Icon name="navicon" size={27} />
          </TouchableOpacity>
        </View>
      ),
    }),
  },
});

export default DrawerNavigator({
  Home: {
    screen: Stack1,
  },
  Profile: {
    screen: Stack2,
  },
});
