import React from 'react';
import {TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Appbar, Avatar} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Details from '../components/Details';
import {useTheme} from 'react-native-paper';
import TabsNavigation from './TabsNavigation';
import Photo from '../images/photo.jpg';
import Profile from '../components/Profile';

const Header = ({scene, previous, navigation}) => {
  const theme = useTheme();
  const {options} = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;

  return (
    <Appbar.Header theme={{colors: {primary: theme.colors.background}}}>
      {previous ? (
        <Appbar.BackAction
          onPress={navigation.goBack}
          color={theme.colors.notification}
        />
      ) : (
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}>
          <Avatar.Image size={40} source={Photo} />
        </TouchableOpacity>
      )}
      <Appbar.Content
        title={
          previous ? (
            title
          ) : (
            <MaterialCommunityIcons
              style={{marginRight: 10}}
              name="twitter"
              size={40}
              color={theme.colors.primary}
            />
          )
        }
      />
    </Appbar.Header>
  );
};
const Stack = createStackNavigator();
const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="FeedList"
      headerMode="screen"
      screenOptions={{
        header: ({scene, previous, navigation}) => (
          <Header scene={scene} previous={previous} navigation={navigation} />
        ),
      }}>
      <Stack.Screen
        name="FeedList"
        component={TabsNavigation}
        options={{headerTitle: 'Twitter'}}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{headerTitle: 'Tweet'}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerTitle: 'Profile'}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
