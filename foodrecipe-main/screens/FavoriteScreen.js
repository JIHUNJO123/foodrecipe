// screens/FavoriteScreen.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const FavoriteScreen = ({ navigation }) => {
  const favoriteRecipes = useSelector((state) => state.favorites.favoriterecipes);

  if (favoriteRecipes.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text>No favorite recipes yet!</Text>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.goBackBtn}>
          <Text style={styles.btnText}>Go back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('RecipeDetail', item)}
    >
      <Image source={{ uri: item.recipeImage }} style={styles.image} />
      <Text style={styles.name}>{item.recipeName.length > 20 ? item.recipeName.substring(0, 20) + '...' : item.recipeName}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container} testID="favoriteRecipes">
      <Text style={styles.heading}>My Favorite Recipes</Text>
      <FlatList
        data={favoriteRecipes}
        keyExtractor={(item) => item.idFood}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  emptyContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  goBackBtn: { marginTop: 20, padding: 10, backgroundColor: '#ccc', borderRadius: 5 },
  btnText: { fontSize: 16 },
  heading: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  list: { paddingBottom: 20 },
  card: { marginBottom: 15, borderRadius: 10, overflow: 'hidden', backgroundColor: '#fff' },
  image: { width: '100%', height: 150 },
  name: { padding: 10, fontSize: 16, fontWeight: 'bold' },
});

export default FavoriteScreen;
