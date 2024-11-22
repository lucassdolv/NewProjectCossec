import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Home from './src/Pages/Home'
import Login from './src/Pages/Login'
import Cadastro from './src/Pages/Cadastro'
import Categories from './src/Pages/Categories'
import Desc from './src/Pages/Desc'
import Profile from './src/Pages/Profile'
import AddProd from './src/Pages/AddProd'
import DeleteProd from './src/Pages/DeleteProd'

const Stack = createNativeStackNavigator()

export default function MainNavigator() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
            <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }}/>
            <Stack.Screen name="Categories" component={Categories} options={{ headerShown: false }}/>
            <Stack.Screen name="Desc" component={Desc} options={{ headerShown: false }}/>
            <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
            <Stack.Screen name="AddProd" component={AddProd} options={{ headerShown: false }}/>
            <Stack.Screen name="DeleteProd" component={DeleteProd} options={{ headerShown: false }}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}
