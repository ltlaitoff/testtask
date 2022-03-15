/**
 * @format
 * @flow strict-local
 */
import React, { useEffect } from 'react'
import type { Node } from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from 'scenes/Home'
import ImageDetails from 'scenes/ImageDetails'

const Stack = createNativeStackNavigator()

const Navigation: () => Node = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name='Home' component={Home} />
				<Stack.Screen name='ImageDetails' component={ImageDetails} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default Navigation
