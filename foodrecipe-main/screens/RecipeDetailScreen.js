// screens/RecipeDetailScreen.js
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../redux/favoritesSlice';

const RecipeDetailScreen = (props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const recipe = props.route.params;
  const favoriteRecipes = useSelector((state) => state.favorites.favoriterecipes);
  const isFavorite = favoriteRecipes.some(r => r.idFood === recipe.idFood);

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(recipe));
  };

  return (
    <ScrollView style={styles.container} testID="contentContainer">
      {/* Image */}
      <View style={styles.imageContainer} testID="imageContainer">
        <Image source={{ uri: recipe.recipeImage }} style={styles.recipeImage} />
      </View>
      {/* Buttons */}
      <View style={styles.topButtonsContainer} testID="topButtonsContainer">
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>GoBack</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.favoriteButton} onPress={handleToggleFavorite}>
          <Text style={styles.favIcon}>{isFavorite ? '♥' : '♡'}</Text>
        </TouchableOpacity>
      </View>
      {/* Title */}
      <Text style={styles.recipeTitle}>{recipe.recipeName}</Text>
      {/* Category and other info */}
      <Text style={styles.recipeCategory}>{recipe.category}</Text>
      {/* Misc icons - mins, servings, calories, type */}
      {/* Skipping icons for brevity */}
      {/* Ingredients */}
      <View style={styles.sectionContainer} testID="sectionContainer">
        <Text style={styles.sectionTitle}>Ingredients</Text>
        {recipe.ingredients && recipe.ingredients.map((ing, index) => (
          <View key={index} style={styles.ingredientItem} testID="ingredientsList">
            <Text style={styles.ingredientText}>{ing.name} - {ing.measure}</Text>
          </View>
        ))}
      </View>
      {/* Instructions */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Instructions</Text>
        <Text style={styles.instructionsText}>{recipe.recipeInstructions}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  imageContainer: { alignItems: 'center', marginBottom: 20 },
  recipeImage: { width: '100%', height: 200, borderRadius: 10 },
  topButtonsContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  backButton: { padding: 10, backgroundColor: '#ccc', borderRadius: 5 },
  backButtonText: { fontSize: 16 },
  favoriteButton: { padding: 10 },
  favIcon: { fontSize: 24, color: 'red' },
  recipeTitle: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  recipeCategory: { fontSize: 18, color: 'gray', marginBottom: 20 },
  sectionContainer: { marginBottom: 20 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  instructionsText: { fontSize: 16, lineHeight: 24 },
  ingredientItem: { marginBottom: 5 },
  ingredientText: { fontSize: 16 },
});

export default RecipeDetailScreen;
