// components/categories.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';

const Categories = ({ categories, activeCategory, handleChangeCategory }) => {
  return (
    <FlatList
      horizontal
      data={categories}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={[
            styles.categoryItem,
            item.strCategory === activeCategory && styles.activeCategory,
          ]}
          onPress={() => handleChangeCategory(item.strCategory)}
        >
          <Image source={{ uri: item.strCategoryThumb }} style={styles.thumb} />
          <Text style={styles.name}>{item.strCategory}</Text>
        </TouchableOpacity>
      )}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  categoryItem: {
    alignItems: 'center',
    padding: 10,
    marginRight: 10,
    borderRadius: 10,
    backgroundColor: '#f2f2f2',
  },
  activeCategory: {
    backgroundColor: '#FBBF24',
  },
  thumb: { width: 60, height: 60, borderRadius: 30 },
  name: { marginTop: 5, fontSize: 14, fontWeight: 'bold' },
});

export default Categories;
