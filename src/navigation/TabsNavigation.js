import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Feed from '../components/Feed';
import Messages from '../components/Messages';
import Notification from '../components/Notification';
import {useTheme, Portal, FAB} from 'react-native-paper';
import {useIsFocused} from '@react-navigation/native';

const Tab = createMaterialBottomTabNavigator();

const TabsNavigation = props => {
  const routeName = props.route.state
    ? props.route.state.routes[props.route.state.index].name
    : 'Feed';
  const theme = useTheme();
  const isfocused = useIsFocused();
  let icon = 'feather';

  switch (routeName) {
    case 'Messages':
      icon = 'email-plus-outline';
      break;
    default:
      icon = 'feather';
      break;
  }
  return (
    <React.Fragment>
      <Tab.Navigator
        initialRouteName="Feed"
        backBehavior="initialRoute"
        shifting={true}
        activeColor={theme.colors.primary}
        inactiveColor={theme.colors.text}
        barStyle={{backgroundColor: theme.colors.background}}
        sceneAnimationEnabled={false}>
        <Tab.Screen
          name="Feed"
          component={Feed}
          options={{
            tabBarIcon: 'home-account',
          }}
        />
        <Tab.Screen
          name="Notification"
          component={Notification}
          options={{
            tabBarIcon: 'bell-outline',
          }}
        />
        <Tab.Screen
          name="Messages"
          component={Messages}
          options={{
            tabBarIcon: 'message-text-outline',
          }}
        />
      </Tab.Navigator>
      <Portal>
        <FAB
          icon={icon}
          visible={isfocused}
          style={{
            position: 'absolute',
            bottom: 100,
            right: 16,
            backgroundColor: theme.colors.primary,
          }}
          color="white"
        />
      </Portal>
    </React.Fragment>
  );
};

export default TabsNavigation;
