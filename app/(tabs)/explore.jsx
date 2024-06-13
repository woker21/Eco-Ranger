import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
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
    <View style={styles.bottomNavigation}>
      <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Inicio')}>
        <Text style={styles.navButtonText}>Inicio</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Buscar')}>
        <Text style={styles.navButtonText}>Buscar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Agregar')}>
        <Text style={styles.navButtonText}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Eventos')}>
        <Text style={styles.navButtonText}>Eventos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Notas')}>
        <Text style={styles.navButtonText}>Notas</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const EventsScreen = () => (
  <View style={styles.container}>
    <Text style={styles.greeting}>Eventos</Text>
  </View>
);

const CalendarScreen = () => (
  <View style={styles.container}>
    <Text style={styles.greeting}>Calendario</Text>
  </View>
);

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator initialRouteName="Inicio">
    <Drawer.Screen name="Inicio" component={HomeScreen} />
    <Drawer.Screen name="Eventos" component={EventsScreen} />
    <Drawer.Screen name="Calendario" component={CalendarScreen} />
  </Drawer.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

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
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopColor: '#A3D9A5',
    borderTopWidth: 1,
  },
  navButton: {
    alignItems: 'center',
  },
  navButtonText: {
    color: '#2C5F2D',
  },
});
