import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Splash from '../Screen/Splash'
import Game from '../Screen/Game'

const Stack = createStackNavigator()

const StackNavigator = () => {
  
    return (
    <>
    <SoundBackground/>
    <Stack.Navigator 
      screenOptions={{
        headerShown:false,
      }}
      initialRouteName={"loading"}
    >
        <Stack.Screen name='splash' component={Splash} />
        <Stack.Screen name='game' component={Game} />
    </Stack.Navigator>
    </>
  )
}

export default StackNavigator