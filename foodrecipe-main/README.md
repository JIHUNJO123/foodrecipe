Food Recipe Mobile App Overview
Purpose
The Food Recipe App helps users explore, create, save, and manage recipes in a clean, visually engaging way. It offers categorized browsing, detailed views, favorites, and custom recipe management.

Core Features
1) Welcome Screen
Animated splash with expanding rings and logo
Automatically transitions to the Home screen after a brief animation
2) Home Screen
Main hub of the app
Shows categories (e.g., Chicken, Beef, Vegetarian)
Filters recipes by selected category
Grid layout for recipe cards
Tapping a recipe opens its detail view
3) Recipe List & Detail
Recipe cards with image and title
Detail screen includes:
Large image
Ingredients list
Instructions
Extra info (prep time, servings, calories)
Favorite toggle (heart icon)
4) Favorites
Mark/unmark recipes as favorites
Favorites screen lists saved recipes
Remove from favorites directly
Persisted via Redux state
5) Custom Recipes
Create, edit, and delete your own recipes
Form for title, image URL, ingredients, instructions
Stored locally with AsyncStorage
Viewable in the My Recipes section
6) Recipe Management
Add new recipes or edit existing ones
Data fields: title, image URL, ingredients, instructions
7) Navigation
Built with react-navigation (stack navigator)
Initial route: Welcome Screen
Flows:
Home → Recipe Details
Home → Favorites
Home → My Recipes
My Recipes → Recipe Form (add/edit)
Recipe Details → Favorites toggle
8) Data Management
Redux for global state (especially favorites)
AsyncStorage for persisting user-created recipes
Category-based filtering
User Experience Highlights
Smooth animated splash screen
Responsive UI for various device sizes
Clear navigation and visual cues
Instant feedback when toggling favorites
Simple editing and deletion of user-generated content
Summary
The Food Recipe App is a comprehensive platform to explore global recipes, personalize collections, and manage favorites and custom creations. It combines animated onboarding, categorized browsing, rich detail views, and local persistence for a polished user experience.
