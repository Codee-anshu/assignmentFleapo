import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native';
import PeopleScreen from '../screens/PeopleScreen';
import ProfileScreen from '../screens/Profilescreen';
import Icon from '../components/Icon';

const Tab = createBottomTabNavigator();

// Dummy placeholder screens
const MapScreen = () => <View><Text>Map Screen</Text></View>;
const ListsScreen = () => <View><Text>Lists Screen</Text></View>;
const HitlistScreen = () => <View><Text>Hitlist Screen</Text></View>;

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarStyle: { backgroundColor: '#111', borderTopWidth: 1, borderTopColor: '#444' },
                    // eslint-disable-next-line react/no-unstable-nested-components
                    tabBarIcon: ({ color, size }) => {
                        let iconName = ''
                        if (route.name === 'Map') iconName = 'map-marker';
                        else if (route.name === 'People') iconName = 'account-group';
                        else if (route.name === 'Lists') iconName = 'clipboard-list';
                        else if (route.name === 'Hitlist') iconName = 'fire';
                        else if (route.name === 'Profile') iconName = 'account-circle';

                        return <Icon icon={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: '#fff',
                    tabBarInactiveTintColor: '#aaa',
                    headerShown: false,
                })}
            >
                <Tab.Screen name="Map" component={MapScreen} />
                <Tab.Screen name="People" component={PeopleScreen} />
                <Tab.Screen name="Lists" component={ListsScreen} />
                <Tab.Screen name="Hitlist" component={HitlistScreen} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation;
