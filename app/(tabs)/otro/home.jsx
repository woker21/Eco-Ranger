import * as React from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const HomeScreen = () => (
  <View style={styles.container}>
    <Text style={styles.greeting}>Hola, John!</Text>
    <Text style={styles.subGreeting}>Ten un buen día</Text>
    <TextInput
      style={styles.searchBar}
      placeholder="Buscar"
      placeholderTextColor="#A3D9A5"
    />
    <View style={styles.filters}>
      <TouchableOpacity style={styles.filterButton}>
        <Text style={styles.filterText}>Tareas</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.filterButton}>
        <Text style={styles.filterText}>Mis eventos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.filterButton}>
        <Text style={styles.filterText}>Calendario</Text>
      </TouchableOpacity>
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

const TokenStoreScreen = () => (
  <View style={styles.container}>
    <Text style={styles.greeting}>Tienda de Tokens</Text>
  </View>
);

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    initialRouteName="Home"
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = 'home';
        } else if (route.name === 'Eventos') {
          iconName = 'calendar';
        } else if (route.name === 'Calendario') {
          iconName = 'calendar-month';
        } else if (route.name === 'Tienda de Tokens') {
          iconName = 'cart';
        }

        return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#2C5F2D',
      tabBarInactiveTintColor: 'gray',
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Inicio' }} />
    <Tab.Screen name="Eventos" component={EventsScreen} />
    <Tab.Screen name="Calendario" component={CalendarScreen} />
    <Tab.Screen name="Tienda de Tokens" component={TokenStoreScreen} />
  </Tab.Navigator>
);

export default TabNavigator;

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
    marginBottom: 20,
  },
  filterButton: {
    backgroundColor: '#E0F7E9',
    padding: 10,
    borderRadius: 5,
  },
  filterText: {
    color: '#2C5F2D',
    fontWeight: 'bold',
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
});
