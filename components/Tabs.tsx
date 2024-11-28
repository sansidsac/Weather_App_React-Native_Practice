import CurrentWeather from "@/screens/CurrentWeather";
import City from "@/screens/City";
import { UpcomingWeather } from "@/screens/UpcominWeather";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

interface WeatherProps {
  weather: any;
}

export default function Tabs({ weather }: WeatherProps) {
  return (
    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor: '#4682B4',
      tabBarInactiveTintColor: '#02003a',
      
      tabBarStyle:{
        backgroundColor: '#ffffff',
      },
      headerStyle:{
        backgroundColor: '#02003a',
      },
      headerTitleStyle:{
        fontWeight: 'bold',
        fontSize: 25,
        color: '#ffffff',
      }
    }}>
      <Tab.Screen name="Current Weather" 
      options={{tabBarIcon:({focused})=><Feather name={'droplet'} size={25} color={focused?'#4682B4':'#02003a'}/> }}>
        {()=><CurrentWeather weatherData={weather.list[0]}/>}
      </Tab.Screen>
      <Tab.Screen name="Upcoming Weather"
       options={{tabBarIcon:({focused})=><Feather name={'clock'} size={25} color={focused?'#4682B4':'#02003a'}/> }}>
         {()=><UpcomingWeather weatherData={weather.list}/>}
       </Tab.Screen> 
      <Tab.Screen name="City"
       options={{tabBarIcon:({focused})=><Feather name={'home'} size={25} color={focused?'#4682B4':'#02003a'}/> }}>
       {()=><City weatherData={weather.city}/>}
     </Tab.Screen> 
    </Tab.Navigator>
  );
}