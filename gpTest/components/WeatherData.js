
import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator,Image,TextInput, ScrollView,Button } from 'react-native';

const WeatherData = ({ data }) => {
  const fahrenheit = (data.main.temp * 1.8 - 459.67).toFixed(2);
  const celsius = (data.main.temp - 273.15).toFixed(2);
  const temp_high=(data.main.temp_max - 273.15).toFixed(2);
  const temp_low = (data.main.temp_min - 273.15).toFixed(2);


  return (
    <View style={styles.container} onStartShouldSetResponder={() => true}>
      <ScrollView style={styles.containerInner}>
	 
      <View style={styles.box}>
	   <Text style={styles.boxLabel}></Text>
          <Image style={styles.image} source={{ uri: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png` }} />
          <Text style={styles.headertext}>Weather:{data.weather[0].description}</Text>
        </View>
		
		<Text style={styles.text}>Today's Temp:</Text>
		<View style = {{flexDirection: 'row',justifyContent: 'center'}}>
		<Text style={styles.text}>{celsius}&#8451;</Text>
        <Text style={styles.temptext}>Temp Max:{temp_high}&#8451;{'\n'}Temp Min:{temp_low}&#8451;</Text>
		</View>
        <Text style={styles.text}>{data.name} - {data.sys.country}</Text>
        <View style={styles.box}> 
        <Text ></Text>
		
        <View style={styles.hairline} />
          <Text style={styles.boxLabel}>Temp Info.</Text>
          <View style={styles.tempContainer}> 
            <Text style={styles.boxText}>Fahrenheit:{fahrenheit}&#8457;</Text>
            <Text style={styles.boxText}>Celsius:{celsius}&#8451;</Text>
			<Text style={styles.boxText}>Feel like:{data.main.feels_like}&#8451;</Text>
          </View>
        </View> 
        <Text ></Text>
		
        <View style={styles.box}>
          <Text style={styles.boxLabel}>Humidity</Text>
          <Text style={styles.boxText}>{data.main.humidity}%</Text>
		  
        </View>
        <Text ></Text>
		
        <View style={styles.box}>
          <Text style={styles.boxLabel}>Pressure</Text>
          <Text style={styles.boxText}>{data.main.pressure}hPa</Text>
        </View>
         <Text ></Text>
        <View style={styles.box}>
          <Text style={styles.boxLabel}>Wind</Text>
          <Text style={styles.boxText}>{data.wind.speed} m/s</Text>
		  <Text ></Text>
		  <Text style={styles.boxLabel}>Wind Degree</Text>
		  <Text style={styles.boxText}>{data.wind.deg}°</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerInner: {
    paddingHorizontal: 20,
  },
  logo: {
    width: 66,
    height: 58,
  },
     text: {
    color: "black",
    fontSize: 25,
    fontWeight: "normal",
    textAlign: "center",
  },
      headertext: {
    color: "black",
    fontSize: 12,
    fontWeight: "normal",
    textAlign: "left",
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  temptext: {
    color: "black",
    fontSize: 12,
    fontWeight: "normal",
    textAlign: "right",
  },
      bgimage: {
    flex: 1,
	width: '100%',
	height: '100%',

  },
    hairline: {
  backgroundColor: 'black',
  height: 0.5,
  width: 300,
  alignContent: 'center',
},
  boxLabel: {
    textTransform: 'uppercase',
    fontSize: 12,
    letterSpacing: 1,
    marginBottom: 5,
  },
  boxText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: 35,
    height: 35,
	backgroundColor: '#00FFFF',
    alignContent: 'center',
  },
  
});

export default WeatherData;