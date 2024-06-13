// MapScreen.js
import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = () => {
  const initialRegion = {
    latitude: 41.3851,
    longitude: 2.1734,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const plantingZones = [
    { id: 1, title: 'Collserola Park', description: 'A major green area in Barcelona.', latitude: 41.4165, longitude: 2.0977 },
    { id: 2, title: 'Montjuïc', description: 'Significant green zone with ongoing tree planting.', latitude: 41.3637, longitude: 2.1650 },
    { id: 3, title: 'Tres Turons', description: 'Three hills that are focal points for urban greening.', latitude: 41.4151, longitude: 2.1571 },
    { id: 4, title: 'Eixample District', description: 'Part of the Superblock initiative.', latitude: 41.3888, longitude: 2.1614 },
    { id: 5, title: 'Ciutadella Park', description: 'Historic park with increasing green cover.', latitude: 41.3880, longitude: 2.1870 },
  ];

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
      >
        {plantingZones.map(zone => (
          <Marker
            key={zone.id}
            coordinate={{ latitude: zone.latitude, longitude: zone.longitude }}
            title={zone.title}
            description={zone.description}
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MapScreen;
