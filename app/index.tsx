import CurrentWeather from "@/screens/CurrentWeather";
import City from "@/screens/City";
import { UpcominWeather } from "@/screens/UpcominWeather";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function Index() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="CurrentWeather" component={CurrentWeather} />
      <Tab.Screen name="UpcominWeather" component={UpcominWeather} />
      <Tab.Screen name="City" component={City} />
    </Tab.Navigator>
  );
}


