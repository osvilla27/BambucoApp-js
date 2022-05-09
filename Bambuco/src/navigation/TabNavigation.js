import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/HomeScreen';
import {FavoriteScreen} from '../screens/FavoriteScreen';
import {SearchScreen} from '../screens/SearchScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../library/utils/theme';

const tabs = [
  {
    name: 'Home',
    icon: 'home-outline',
    screen: HomeScreen,
  },
  {
    name: 'Search',
    icon: 'search-outline',
    screen: SearchScreen,
  },
  {
    name: 'Favorite',
    icon: 'heart-outline',
    screen: FavoriteScreen,
  },
];

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  
  return (
    <>
      <Tab.Navigator 
        initialRouteName="Home"
        screenOptions={{ 
          headerShown: false, 
          tabBarShowLabel: false,}}
      >
       {tabs.map(({name, icon, screen}) => {
          return (
            <Tab.Screen
              key={name}
              name={name}
              component={screen}
              options={{
                tabBarIcon: ({focused}) => {
                  return (
                    <Icon
                      name={icon}
                      size={22}
                      style={{
                        color: focused ? colors.primary : colors.gray,
                      }}
                    />
                  );
                },
              }}
            />
          );
        })}
      </Tab.Navigator>
    </>
  );
};




export default TabNavigator;

