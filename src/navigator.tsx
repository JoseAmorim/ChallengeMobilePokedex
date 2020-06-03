import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {
    createStackNavigator,
    StackNavigationProp,
} from '@react-navigation/stack'
import Home from './screens/Home'
import Profile from './screens/Profile'

const MainStack = createStackNavigator()

export type RootParamList = {
    Home: undefined
    Profile: {
        url: string
    }
}

export type StackNavigator = StackNavigationProp<RootParamList>

export default function App() {
    return (
        <NavigationContainer>
            <MainStack.Navigator
                headerMode="screen"
                screenOptions={{
                    headerTransparent: true,
                    headerTitle: () => null,
                }}>
                <MainStack.Screen name="Home" component={Home} />
                <MainStack.Screen name="Profile" component={Profile} />
            </MainStack.Navigator>
        </NavigationContainer>
    )
}
