import CurrentWeather from "@/screens/CurrentWeather";
import City from "@/screens/City";
import { UpcominWeather } from "@/screens/UpcominWeather";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
      
      tabBarStyle:{
        backgroundColor: 'lightblue',
      },
      headerStyle:{
        backgroundColor: 'lightblue',
      },
      headerTitleStyle:{
        fontWeight: 'bold',
        fontSize: 25,
        color: 'tomato',
      }
    }}>
      <Tab.Screen name="CurrentWeather" component={CurrentWeather} 
      options={{tabBarIcon:({focused})=><Feather name={'droplet'} size={25} color={focused?'tomato':'black'}/> }} />
      <Tab.Screen name="UpcominWeather" component={UpcominWeather} 
       options={{tabBarIcon:({focused})=><Feather name={'clock'} size={25} color={focused?'tomato':'black'}/> }} />
      <Tab.Screen name="City" component={City}  
       options={{tabBarIcon:({focused})=><Feather name={'home'} size={25} color={focused?'tomato':'black'}/> }} />
    </Tab.Navigator>
  );
}