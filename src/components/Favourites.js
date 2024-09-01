import React from "react";

const Favorites = ({ favorites }) => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-4xl font-bold text-gray-800 mb-8">Your Favorites</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {favorites.map((meal, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-48 object-cover" />
            <div className="p-4 text-center">
              <h4 className="text-xl font-bold text-gray-700">{meal.strMeal}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
