import * as React from "react";
import MapView, { Callout, Marker } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { COLORS } from "../../Constants/COLORS";

const homePlace = {
  description: "Home",
  geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
};
const workPlace = {
  description: "Work",
  geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
};
const MapScreen = () => {
  const [pin, setPin] = React.useState({
    latitude: 33.6515371,
    longitude: 73.1558874,
  });
  const [region, setRegion] = React.useState({
    latitude: 33.6515371,
    longitude: 73.1558874,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 33.6515371,
          longitude: 73.1558874,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        provider="google"
      >
        <Marker
          coordinate={{
            latitude: region.latitude,
            longitude: region.longitude,
          }}
        ></Marker>
        <Marker
          coordinate={pin}
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
        <GooglePlacesAutocomplete
          placeholder="Search"
          fetchDetails={true}
          GooglePlacesSearchQuery={{
            rankby: "distance",
          }}
          onFail={(e)=>{
              console.log(e)
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
            key: "AIzaSyBklZAtI6iQhA9aG8pfe4jDOLxdeWY4kO4",
            language: "en",
            type: "establishment",
            location: `${region.latitude}, ${region.longitude}`,
          }}
          predefinedPlaces={[workPlace, homePlace]}
          currentLocation={true}
          cu
          styles={{
            container: {
              flex: 0,
              position: "absolute",
              width: "100%",
              zIndex: 1,
            },
            listView: { backgroundColor: COLORS.font },
          }}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
export default MapScreen;
