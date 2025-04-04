import React from 'react';
import { SafeAreaView } from 'react-native';
import AppNavigation from './src/navigation/AppNavigator';

const App = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <AppNavigation />
        </SafeAreaView>
    );
};

export default App;