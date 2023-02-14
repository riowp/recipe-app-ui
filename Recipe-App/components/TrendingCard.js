import React from "react";
import {
  View,
  Text,
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { COLORS, SIZES, icons } from "../constants";
const RecipeCardDetails = ({ recipeItem }) => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {/* Name & Bookmark */}
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            color: COLORS.white,
            fontSize: 18,
            lineHeight: 22,
            fontWeight: "bold",
            width: "70%",
          }}
        >
          {recipeItem.name}
        </Text>

        <Image
          source={recipeItem.isBookmark ? icons.bookmarkFilled : icons.bookmark}
          style={{
            width: 20,
            height: 20,
            marginRight: SIZES.base,
            tintColor: COLORS.darkGreen,
          }}
        />
      </View>

      {/* Duration and Servings */}
      <Text
        style={{
          color: COLORS.lightGray,
          fontSize: 14,
          lineHeight: 22,
        }}
      >
        {recipeItem.duration} | {recipeItem.serving} Serving
      </Text>
    </View>
  );
};

const RecipeCardinfo = ({ recipeItem }) => {
  return (
    <View style={styles.recipeCardContainer}>
      <RecipeCardDetails recipeItem={recipeItem} />
    </View>
  );
};

const TrendingCard = ({ containerStyle, recipeItem, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        height: 350,
        width: 250,
        marginTop: SIZES.radius,
        marginRight: 20,
        borderRadius: SIZES.radius,
        ...containerStyle,
      }}
      onPress={onPress}
    >
      {/* Background Image */}
      <Image
        source={recipeItem.image}
        resizeMode="cover"
        style={{
          width: 250,
          height: 350,
          borderRadius: SIZES.radius,
        }}
      />

      {/* Category */}
      <View
        style={{
          position: "absolute",
          top: 20,
          left: 15,
          paddingHorizontal: SIZES.radius,
          paddingVertical: 5,
          backgroundColor: COLORS.transparentGray,
          borderRadius: SIZES.radius,
        }}
      >
        <Text
          style={{
            color: COLORS.white,
            fontSize: 14,
            lineHeight: 22,
            fontWeight: "bold",
          }}
        >
          {recipeItem.category}
        </Text>
      </View>

      {/* Card Info */}

      <RecipeCardinfo recipeItem={recipeItem} />
    </TouchableOpacity>
  );
};

export default TrendingCard;

const styles = StyleSheet.create({
  recipeCardContainer: {
    position: "absolute",
    bottom: 10,
    right: 10,
    left: 10,
    height: 100,
    paddingVertical: SIZES.radius,
    paddingHorizontal: SIZES.base,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.transparentDarkGray,
  },
});
