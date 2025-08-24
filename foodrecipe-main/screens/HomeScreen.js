// screens/HomeScreen.js
import React, { useState } from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { wp, hp } from 'react-native-responsive-screen';

import Categories from '../components/categories';
import Recipes from '../components/recipes';

const HomeScreen = () => {
  const [activeCategory, setActiveCategory] = useState('Chicken');

  const categories = [
    { id: 1, strCategory: 'Chicken', strCategoryThumb: 'https://...' },
    { id: 2, strCategory: 'Beef', strCategoryThumb: 'https://...' },
    { id: 3, strCategory: 'Vegetarian', strCategoryThumb: 'https://...' },
    // add more categories
  ];

  const allFood = [
    {
      idMeal: '1',
      strMeal: 'Grilled Chicken',
      strMealThumb: 'https://...',
      strCategory: 'Chicken',
      strInstructions: '...',
    },
    // more recipes
  ];

  const handleChangeCategory = (category) => {
    setActiveCategory(category);
  };

  const filteredFoods = allFood.filter(food => food.strCategory === activeCategory);

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView testID="scrollContainer">
        {/* Header */}
        <View testID="headerContainer" style={styles.header}>
          <Image source={require('../assets/avatar.png')} style={styles.avatar} />
          <Text style={styles.greeting}>Hello, User!</Text>
        </View>
        {/* Title */}
        <View testID="titleContainer" style={styles.titleContainer}>
          <Text style={styles.title}>Make your own food</Text>
          <Text style={styles.subtitle}>stay at home</Text>
        </View>
        {/* Categories */}
        <View testID="categoryList">
          <Categories
            categories={categories}
            activeCategory={activeCategory}
            handleChangeCategory={handleChangeCategory}
          />
        </View>
        {/* Recipes */}
        <View testID="foodList">
          <Recipes foods={filteredFoods} categories={categories} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { flexDirection: 'row', alignItems: 'center', padding: 20 },
  avatar: { width: 50, height: 50, borderRadius: 25 },
  greeting: { marginLeft: 10, fontSize: 18, fontWeight: 'bold' },
  titleContainer: { paddingHorizontal: 20 },
  title: { fontSize: 24, fontWeight: 'bold', letterSpacing: 1 },
  subtitle: { fontSize: 16, color: 'gray' },
});

export default HomeScreen;
