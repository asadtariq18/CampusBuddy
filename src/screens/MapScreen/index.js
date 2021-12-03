import * as React from "react";
import MapView, { Callout, Marker } from "react-native-maps";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  StatusBar,
} from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { COLORS } from "../../Constants/COLORS";

const places = [
  {
    description: "CS Department",
    geometry: { location: { lat: 33.65006959357917, lng: 73.15560400485994 } },
  },
  {
    description: "Faculty Block",
    geometry: { location: { lat: 33.649582848147084, lng: 73.15544307231904 } },
  },
  {
    description: "EE Department",
    geometry: { location: { lat: 33.65118597178851, lng: 73.15625309944154 } },
  },
  {
    description: "Physics Department",
    geometry: { location: { lat: 33.6507304912278, lng: 73.15580785274507 } },
  },
  {
    description: "Admission Office",
    geometry: { location: { lat: 33.64910503114663, lng: 73.15537333488466 } },
  },
];

const MapScreen = () => {
  const [pin, setPin] = React.useState({
    latitude: 33.6515371,
    longitude: 73.1558874,
  });
  const [region, setRegion] = React.useState({
    latitude: 33.6515371,
    longitude: 73.1558874,
    latitudeDelta: 10.0922,
    longitudeDelta: 10.0421,
  });
  const onRegionChange = (region) => {
    setRegion({
      latitude: region.latitude,
      longitude: region.longitude,
      latitudeDelta: region.latitudeDelta,
      longitudeDelta: region.longitudeDelta,
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.primary} />
      <View style={styles.header}>
        <Text style={styles.text}> Search here </Text>
      </View>
      <GooglePlacesAutocomplete
        placeholder="Search"
        fetchDetails={true}
        currentLocation={true}
        currentLocationLabel="Current location"
        GooglePlacesSearchQuery={{
          rankby: "distance",
        }}
        onFail={(e) => {
          console.log("Error: ", e);
        }}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          setRegion({
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          });
        }}
        query={{
          key: "AIzaSyD8LqtSwhYEG2iLeEOpBD6-R8bgR_27Mio",
          language: "en",
          type: "establishment",
          location: `${region.latitude}, ${region.longitude}`,
        }}
        predefinedPlaces={places}
        onPress={(p) => {
          console.log("Region: ", p);
          // setRegion({
          //   latitude: p.geometry.location.lat,
          //   longitude: p.geometry.location.lng,
          // });
        }}
        currentLocation={true}
        styles={{
          container: {
            borderRadius: 30,
            flex: 0,
            marginTop: 5,
            width: "95%",
            zIndex: 1,
          },
        }}
      />
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 33.6515371,
          longitude: 73.1558874,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        provider="google"
        onRegionChange={onRegionChange}
        showsBuildings
        showsUserLocation
        minZoomLevel={2}
        loadingEnabled
        mapType={"standard"}
      >
        <Marker
          coordinate={region}
          draggable={true}
          onDragStart={(e) => {}}
          onDragEnd={(e) => {
            setPin({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
            });
          }}
        >
          <Callout>
            <Text>I am here</Text>
          </Callout>
        </Marker>
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  map: {
    width: Dimensions.get("window").width - 0,
    height: Dimensions.get("window").height,
    marginTop: 5,
  },
  text: {
    fontSize: 25,
    color: COLORS.font,
  },
  header: {
    paddingHorizontal: 10,
    alignSelf: "flex-start",
    marginTop: 20,
  },
});
export default MapScreen;
