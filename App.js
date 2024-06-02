
import React from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet, FlatList, Image } from 'react-native';

const categories = [
  { id: '1', name: 'Exercise', tasks: 12, image: require('./assets/exercise.png') },
  { id: '2', name: 'Study', tasks: 12, image: require('./assets/study.png') },
  { id: '3', name: 'Code', tasks: 10, image: require('./assets/code.png') },
  { id: '4', name: 'Cook', tasks: 8, image: require('./assets/cook.png') },
  { id: '5', name: 'Read', tasks: 5, image: require('./assets/read.png') },
  { id: '6', name: 'Write', tasks: 6, image: require('./assets/write.png') },
  { id: '7', name: 'Meditate', tasks: 4, image: require('./assets/meditate.png') },
  { id: '8', name: 'Play', tasks: 9, image: require('./assets/play.png') },
];

const ongoingTasks = [
  { id: '1', name: 'Mobile App Development' },
  { id: '2', name: 'Web Development' },
  // Add more tasks to make a total of 15
  { id: '3', name: 'Database Management' },
  { id: '4', name: 'UI/UX Design' },
  { id: '5', name: 'Backend Integration' },
  { id: '6', name: 'Frontend Development' },
  { id: '7', name: 'Code Review' },
  { id: '8', name: 'Testing and QA' },
  { id: '9', name: 'Documentation' },
  { id: '10', name: 'Deployment' },
  { id: '11', name: 'API Development' },
  { id: '12', name: 'Security Assessment' },
  { id: '13', name: 'Performance Optimization' },
  { id: '14', name: 'Feature Planning' },
  { id: '15', name: 'Client Meeting' },
];

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello, Devs</Text>
        <Text style={styles.taskCount}>14 tasks today</Text>
        <Image style={styles.profileIcon} source={require('./assets/profile.png')} />
      </View>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search" />
        <Image style={styles.filterIcon} source={require('./assets/filter.png')} />
      </View>
      <Text style={styles.sectionTitle}>Categories</Text>
      <View style={styles.categoriesContainer}>
        {categories.map((category) => (
          <View key={category.id} style={styles.categoryCard}>
            <Image style={styles.categoryImage} source={category.image} />
            <Text style={styles.categoryName}>{category.name}</Text>
            <Text style={styles.categoryTasks}>{category.tasks} Tasks</Text>
          </View>
        ))}
      </View>
      <Text style={styles.sectionTitle}>Ongoing Task</Text>
      <FlatList
        data={ongoingTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskCard}>
            <Text style={styles.taskName}>{item.name}</Text>
          </View>
        )}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F7F0E8',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  taskCount: {
    fontSize: 16,
    color: '#777',
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  filterIcon: {
    width: 30,
    height: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  categoryCard: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  categoryImage: {width: 60,
    height: 60,
    marginBottom: 10,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  categoryTasks: {
    fontSize: 14,
    color: '#777',
  },
  taskCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
  },
  taskName: {
    fontSize: 16,
  },
});

export default App;
