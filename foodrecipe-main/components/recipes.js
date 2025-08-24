// components/recipes.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';

const Recipes = ({ foods, categories }) => {
  const renderArticle = ({ item, index }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        // navigate to RecipeDetailScreen
      }}
    >
      <Image source={{ uri: item.strMealThumb }} style={styles.image} />
      <Text style={styles.recipeName}>{item.strMeal}</Text>
    </TouchableOpacity>
  );

  return (
    <View testID="recipesDisplay">
      <FlatList
        data={foods}
        keyExtractor={(item) => item.idMeal}
        numColumns={2}
        renderItem={renderArticle}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: { paddingHorizontal: 10, paddingVertical: 20 },
  card: {
    flex: 1,
    margin: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 2,
  },
  image: { width: '100%', height: 150 },
  recipeName: { padding: 10, fontWeight: 'bold' },
});

export default Recipes;
