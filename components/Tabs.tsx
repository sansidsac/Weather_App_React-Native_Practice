import CurrentWeather from "@/screens/CurrentWeather";
import City from "@/screens/City";
import { UpcominWeather } from "@/screens/UpcominWeather";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

interface WeatherProps {
  weather: any;
}

export default function Tabs({ weather }: WeatherProps) {
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
      <Tab.Screen name="CurrentWeather" 
      options={{tabBarIcon:({focused})=><Feather name={'droplet'} size={25} color={focused?'tomato':'black'}/> }}>
        {()=><CurrentWeather weatherData={weather.list[0]}/>}
      </Tab.Screen>
      <Tab.Screen name="UpcominWeather"
       options={{tabBarIcon:({focused})=><Feather name={'clock'} size={25} color={focused?'tomato':'black'}/> }}>
         {()=><UpcominWeather weatherData={weather.list}/>}
       </Tab.Screen> 
      <Tab.Screen name="City"
       options={{tabBarIcon:({focused})=><Feather name={'home'} size={25} color={focused?'tomato':'black'}/> }}>
       {()=><City weatherData={weather.city}/>}
     </Tab.Screen> 
    </Tab.Navigator>
  );
}