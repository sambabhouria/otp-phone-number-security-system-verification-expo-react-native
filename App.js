import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import 'react-native-gesture-handler'
import Dashboard from './src/screens/Dashboard'
import Registration from './src/screens/Registration'
import VerificationForm from './src/screens/VerificationForm'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Register" component={Registration} />
        <Stack.Screen name="VerificationForm" component={VerificationForm} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
