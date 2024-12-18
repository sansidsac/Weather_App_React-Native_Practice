import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import RowText from "@/components/RowText";
import { weatherType } from "@/utilities/weatherType";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10,
    padding: 20,
    margin: 20,
  },
  wrapper: {
    flex: 1,
  },
  tempStyles: {
    color: "white",
    fontSize: 48,
    fontWeight: 'bold',
  },
  feels: {
    color: "white",
    fontSize: 30,
    fontWeight: 'bold',
  },
  highLow: {
    color: "white",
    fontSize: 20,
    fontWeight: 'bold',
  },
  highLowWrapper: {
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    fontSize: 43,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  message: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
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
  const weathercondition = weather[0]?.main as keyof typeof weatherType

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <SafeAreaView style={[wrapper, {backgroundColor: weatherType[weathercondition]?.backgroundColor}]}>
      <View style={container}>
        <Feather name={weatherType[weathercondition]?.icon as keyof typeof Feather.glyphMap} size={50} color="white" />
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
        messageOne={capitalizeFirstLetter(weather[0]?.description)}
        messageTwo={weatherType[weathercondition]?.message}
        containerStyles={bodyWrapper}
        messageOneStyles={description}
        messageTwoStyles={message}
      />
    </SafeAreaView>
  );
}
