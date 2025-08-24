// screens/MyRecipeScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, ActivityIndicator, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MyRecipeScreen = ({ navigation }) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRecipes = async () => {
    try {
      const data = await AsyncStorage.getItem('customrecipes');
      if (data) {
        setRecipes(JSON.parse(data));
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  const handleAddRecipe = () => {
    navigation.navigate('RecipesFormScreen');
  };

  const handleRecipeClick = (recipe, index) => {
    navigation.navigate('CustomRecipesScreen', { recipe, index });
  };

  const deleterecipe = async (index) => {
    try {
      const updated = [...recipes];
      updated.splice(index, 1);
      await AsyncStorage.setItem('customrecipes', JSON.stringify(updated));
      setRecipes(updated);
    } catch (err) {
      console.log(err);
    }
  };

  const editrecipe = (recipe, index) => {
    navigation.navigate('RecipesFormScreen', { recipeToEdit: recipe, recipeIndex: index });
  };

  if (loading) return <ActivityIndicator size="large" style={{ flex: 1, justifyContent: 'center' }} />;

  if (recipes.length === 0)
    return (
      <View style={styles.emptyContainer}>
        <Text>No recipes. Add some!</Text>
        <TouchableOpacity style={styles.button} onPress={handleAddRecipe}>
          <Text style={styles.buttonText}>Add Recipe</Text>
        </TouchableOpacity>
      </View>
    );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.addButton} onPress={handleAddRecipe}>
        <Text style={styles.addButtonText}>Add New Recipe</Text>
      </TouchableOpacity>
      {recipes.map((recipe, index) => (
        <View key={recipe.idFood} style={styles.recipeCard}>
          <TouchableOpacity testID="handlerecipeBtn" onPress={() => handleRecipeClick(recipe, index)}>
            <Image source={{ uri: recipe.image }} style={styles.recipeImage} />
            <Text testID="recipeDescp">
              {recipe.recipeInstructions.substring(0, 50)}{recipe.recipeInstructions.length > 50 ? '...' : ''}
            </Text>
          </TouchableOpacity>
          <View style={styles.editDeleteButtons} testID="editDeleteButtons">
            <TouchableOpacity onPress={() => editrecipe(recipe, index)} style={styles.editBtn}>
              <Text>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => deleterecipe(index)} style={styles.deleteBtn}>
              <Text>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  emptyContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  button: { padding: 10, backgroundColor: '#FBBF24', borderRadius: 8, marginTop: 20 },
  buttonText: { fontSize: 16, fontWeight: 'bold' },
  addButton: { marginBottom: 20, padding: 15, backgroundColor: '#FBBF24', borderRadius: 10, alignItems: 'center' },
  recipeCard: { marginBottom: 20, backgroundColor: '#fff', borderRadius: 10, padding: 10, elevation: 2 },
  recipeImage: { width: '100%', height: 150, borderRadius: 10 },
  editDeleteButtons: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 },
  editBtn: { padding: 10, backgroundColor: '#ccc', borderRadius: 5 },
  deleteBtn: { padding: 10, backgroundColor: '#f44336', borderRadius: 5 },
});
export default MyRecipeScreen;
