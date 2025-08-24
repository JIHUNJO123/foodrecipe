# foodrecipe
Food Recipe Mobile App Overview
Purpose
The Food Recipe App is a mobile application designed to help users explore, create, save, and view recipes in an organized and visually appealing way. It offers features like browsing categories, viewing detailed recipes, saving favorites, and adding custom recipes.

Core Features
1. Welcome Screen
Animated splash screen with expanding rings and logo.
Automatically navigates users to the Home Screen after a brief animation.
2. Home Screen
Acts as the main hub.
Displays categories like Chicken, Beef, Vegetarian, etc.
Shows recipes filtered based on the selected category.
Users can scroll through recipes presented in a grid format.
Tapping a recipe navigates to the detailed view.
3. Recipe List & Details
Recipes.js displays recipes as cards with images and names.
Selecting a recipe takes users to a Recipe Detail Screen, presenting:
Large image
Ingredients list
Instructions
Additional info like prep time, servings, calories
Favorite toggle button (heart icon)
4. Favorites
Users can mark recipes as favorites.
The Favorite Screen shows all saved favorite recipes.
Users can remove recipes from favorites directly from this screen.
Favorite status is persisted via Redux state.
5. Custom Recipes
Users can create their own recipes via a form.
They can edit or delete their existing custom recipes.
Data is stored locally using AsyncStorage for persistence.
Custom recipes are viewable in the My Recipes section.
6. Recipe Management
Users can add new recipes, or edit existing ones.
Recipe data includes title, image URL, ingredients, instructions.
Editing allows updating details and saving changes.
Navigation System
Uses react-navigation with a stack navigator.
Initial route is the Welcome Screen.
Navigation between screens:
Home → Recipe Details
Home → Favorites
Home → My Recipes
My Recipes → Recipe Form (add/edit)
Recipe Details → Favorites toggle
etc.
Data Management
Redux manages global state, especially favorites.
AsyncStorage handles persistent storage of user-created recipes.
Recipes are categorized for easy filtering.
User Experience Highlights
Smooth animated splash screen.
Responsive UI that adapts to different device sizes.
Intuitive navigation and clear visual cues.
Ability to personalize experience by creating and saving custom recipes.
Seamless toggle of favorite status with instant visual feedback.
Easy editing and deletion of user-generated content.
Visual Layout (Summary)
Splash Screen with animated rings and logo.
Home Screen with:
Greeting and avatar
Horizontal categories list
Grid of recipe cards
Recipe Detail Screen with:
Large image
Ingredients list
Instructions
Favorite button
Favorites Screen with list of saved recipes
My Recipes screen with options to add, edit, delete recipes
Recipe Form for creating/updating recipes
Summary
This Food Recipe Website (or rather, app) is a comprehensive platform enabling users to explore global recipes, personalize their collection, and manage favorite and custom recipes efficiently. It combines animated splash screens, categorized browsing, detailed recipe views, and local data storage to deliver a rich user experience.

