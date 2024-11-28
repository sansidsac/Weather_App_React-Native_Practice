import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import RowText from "@/components/RowText";
import { weatherType } from "@/utilities/weatherType";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    flex: 1,
    backgroundColor: "lightblue",
  },
  tempStyles: {
    color: "black",
    fontSize: 48,
  },
  feels: {
    color: "black",
    fontSize: 30,
  },
  highLow: {
    color: "black",
    fontSize: 20,
  },
  highLowWrapper: {
    flexDirection: "row",
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    fontSize: 48,
  },
  message: {
    fontSize: 30,
  },
});



interface WeatherData {
  main: {
    temp: number;
    feels_like: number;
    temp_max: number;
    temp_min: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
}

export default function CurrentWeather({ weatherData }: { weatherData: WeatherData }) {

  const{container, wrapper, tempStyles, feels, highLow, highLowWrapper, bodyWrapper, description, message}=styles

  const{main:{temp, feels_like, temp_max, temp_min}, weather}=weatherData
  const weathercondition = weather[0].main as keyof typeof weatherType

  return (
    <SafeAreaView style={[wrapper, {backgroundColor: weatherType[weathercondition].backgroundColor}]}>
      <View style={container}>
        <Feather name={weatherType[weathercondition].icon as keyof typeof Feather.glyphMap} size={50} color="white" />
        <Text style={tempStyles}>{`${temp}°`}</Text>
        <Text style={feels}>{`Feels like ${feels_like}°`}</Text>
        <RowText
          messageOne={`High: ${temp_max}°  `}
          messageTwo={`Low: ${temp_min}°`}
          containerStyles={highLowWrapper}
          messageOneStyles={highLow}
          messageTwoStyles={highLow}
        />
      </View>
      <RowText
        messageOne={weather[0].description}
        messageTwo={weatherType[weathercondition].message}
        containerStyles={bodyWrapper}
        messageOneStyles={description}
        messageTwoStyles={message}
      />
    </SafeAreaView>
  );
}
