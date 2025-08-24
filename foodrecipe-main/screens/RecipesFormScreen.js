// screens/RecipesFormScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RecipesFormScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { recipeToEdit, recipeIndex } = route.params || {};

  const [title, setTitle] = useState(recipeToEdit ? recipeToEdit.recipeName : '');
  const [image, setImage] = useState(recipeToEdit ? recipeToEdit.recipeImage : '');
  const [description, setDescription] = useState(recipeToEdit ? recipeToEdit.recipeInstructions : '');

  const saveRecipe = async () => {
    try {
      const newRecipe = {
        idFood: Date.now().toString(),
        recipeName: title,
        recipeImage: image,
        recipeInstructions: description,
        ingredients: [], // add ingredients if needed
      };
      const storedRecipes = await AsyncStorage.getItem('customrecipes');
      const recipes = storedRecipes ? JSON.parse(storedRecipes) : [];

      if (recipeToEdit) {
        recipes[recipeIndex] = newRecipe;
      } else {
        recipes.push(newRecipe);
      }

      await AsyncStorage.setItem('customrecipes', JSON.stringify(recipes));
      navigation.goBack();
    } catch (err) {
      console.log('Error saving recipe:', err);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Title</Text>
      <TextInput style={styles.input} value={title} onChangeText={setTitle} />

      <Text style={styles.label}>Image URL</Text>
      <TextInput style={styles.input} value={image} onChangeText={setImage} />

      {image ? (
        <Image source={{ uri: image }} style={styles.imagePreview} />
      ) : (
        <Text style={styles.placeholder}>Upload Image URL</Text>
      )}

      <Text style={styles.label}>Description</Text>
      <TextInput
        style={[styles.input, { height: 100 }]}
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <TouchableOpacity style={styles.saveButton} onPress={saveRecipe}>
        <Text style={styles.saveText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  label: { fontSize: 16, marginVertical: 8 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 10 },
  imagePreview: { width: '100%', height: 200, marginVertical: 10, borderRadius: 10 },
  placeholder: { fontSize: 14, color: 'gray', marginVertical: 10 },
  saveButton: { backgroundColor: '#FBBF24', padding: 15, borderRadius: 10, marginTop: 20, alignItems: 'center' },
  saveText: { fontSize: 16, fontWeight: 'bold' },
});

export default RecipesFormScreen;
