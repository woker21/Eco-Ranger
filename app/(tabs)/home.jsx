import React from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
    
      <Text style={styles.greeting}>Hola, John!</Text>
      <Text style={styles.subGreeting}>Ten un buen día</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Buscar"
        placeholderTextColor="#A3D9A5"
      />
      <View style={styles.filters}>
        <Text style={styles.filterText}>Tareas</Text>
        <Text style={styles.filterText}>Mis eventos</Text>
        <Text style={styles.filterText}>Calendario</Text>
      </View>
      <ScrollView horizontal={true} style={styles.scrollView}>
        <View style={styles.eventCard}>
          <Text style={styles.eventCardTitle}>Evento 1</Text>
          <Text style={styles.eventCardSubtitle}>Detalles del evento</Text>
        </View>
        <View style={styles.eventCard}>
          <Text style={styles.eventCardTitle}>Evento 2</Text>
          <Text style={styles.eventCardSubtitle}>Detalles del evento</Text>
        </View>
      </ScrollView>
      <View style={styles.recentFiles}>
        <Text style={styles.recentFilesTitle}>Eventos recientes</Text>
        <View style={styles.file}>
          <Text style={styles.fileName}>Reunión comunitaria</Text>
          <Text style={styles.fileTime}>Hace 12 horas</Text>
        </View>
        <View style={styles.file}>
          <Text style={styles.fileName}>Plantación de árboles</Text>
          <Text style={styles.fileTime}>Hace 2 días</Text>
        </View>
      </View>


      
    
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2C5F2D',
  },
  subGreeting: {
    fontSize: 16,
    color: '#A3D9A5',
  },
  searchBar: {
    marginVertical: 20,
    padding: 10,
    borderColor: '#A3D9A5',
    borderWidth: 1,
    borderRadius: 5,
    color: '#2C5F2D',
  },
  filters: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  filterText: {
    color: '#2C5F2D',
  },
  scrollView: {
    marginVertical: 20,
  },
  eventCard: {
    backgroundColor: '#87CEEB',
    padding: 20,
    borderRadius: 10,
    marginRight: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  eventCardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  eventCardSubtitle: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  recentFiles: {
    marginVertical: 20,
  },
  recentFilesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C5F2D',
    marginBottom: 10,
  },
  file: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomColor: '#A3D9A5',
    borderBottomWidth: 1,
  },
  fileName: {
    color: '#2C5F2D',
  },
  fileTime: {
    color: '#A3D9A5',
  },
  
  navButton: {
    alignItems: 'center',
  },
  navButtonText: {
    color: '#2C5F2D',
  },
});

export default App;
