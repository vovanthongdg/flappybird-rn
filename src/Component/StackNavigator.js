import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Splash from '../Screen/Splash'
import Game from '../Screen/Game'
import LoadingScreen from './LoadingScreen'
import Tutorial from './Tutorial'
import HistoryScreen from './History'
const Stack = createStackNavigator()

const StackNavigator = () => {
  
    return (
    <>
    <Stack.Navigator 
      screenOptions={{
        headerShown:false,
      }}
      initialRouteName="loading"
    >
      <Stack.Screen name='loading' component={LoadingScreen} />
      <Stack.Screen name='tutorial' component={Tutorial} options={{headerShown:true,headerTitle:"Tutorial Game"}}/>
      <Stack.Screen name='history' component={HistoryScreen} options={{headerShown:true,headerTitle:"Higher Point Game"}}/>
      <Stack.Screen name='splash' component={Splash} />
      <Stack.Screen name='game' component={Game}/>
    </Stack.Navigator>
    </>
  )
}

export default StackNavigator