import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Cadastro from '../pages/Cadastro'
import Inicio from '../pages/Inicio'

const Stack = createNativeStackNavigator()

export default function Routes(){
  return(
    <Stack.Navigator>
      <Stack.Screen
        name="Cadastro"
        component={Cadastro}
        options={{title: 'Cadastro', headerShown: false}}
      />
      <Stack.Screen
        name="Inicio"
        component={Inicio}
        options={{title: 'Inicio', headerShown: false}}
      />      
    </Stack.Navigator>
  )
}