import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  TextInput,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { CategoryCard, TrendingCard } from "../components";
import { COLORS, SIZES, icons, dummyData, images } from "../constants";
const Home = ({ navigation }) => {
  const renderHeader = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: SIZES.padding,
          alignItems: "center",
          height: 80,
        }}
      >
        {/* Text */}
        <View
          style={{
            flex: 1,
          }}
        >
          <Text
            style={{
              color: COLORS.darkGreen,
              fontSize: 22,
              lineHeight: 30,
              fontWeight: "bold",
            }}
          >
            Hello Dear
          </Text>

          <Text
            style={{
              marginTop: 3,
              color: COLORS.gray,
              fontSize: 16,
              lineHeight: 22,
            }}
          >
            What you want to cook today?
          </Text>
        </View>
        {/* Image */}
        <TouchableOpacity onPress={() => console.log("Profile")}>
          <Image
            source={images.profile}
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const renderSearchBar = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          height: 50,
          alignItems: "center",
          marginHorizontal: SIZES.padding,
          paddingHorizontal: SIZES.radius,
          borderRadius: 10,
          backgroundColor: COLORS.lightGray,
        }}
      >
        <Image
          source={icons.search}
          style={{
            width: 20,
            height: 20,
            tintColor: COLORS.gray,
          }}
        />

        <TextInput
          style={{
            marginLeft: SIZES.radius,
            fontSize: 16,
            lineHeight: 22,
          }}
          placeHolderTextColor={COLORS.gray}
          placeholder="Search Recipe"
        />
      </View>
    );
  };

  const renderSeeRecipeCard = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.padding,
          borderRadius: 10,
          backgroundColor: COLORS.lightGreen,
        }}
      >
        {/* Image */}
        <View
          style={{
            width: 100,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={images.recipe}
            style={{
              width: 80,
              height: 80,
            }}
          />
        </View>
        {/* Text */}

        <View
          style={{
            flex: 1,
            paddingVertical: SIZES.radius,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              lineHeight: 22,
              width: "70%",
            }}
          >
            You have 12 recipes that you haven't tried yet
          </Text>

          <TouchableOpacity
            style={{
              marginTop: 10,
            }}
            onPress={() => console.log("See Recipes")}
          >
            <Text
              style={{
                color: COLORS.darkGreen,
                textDecorationLine: "underline",
                fontSize: 14,
                lineHeight: 22,
                fontWeight: "bold",
              }}
            >
              See Recipes
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderTrendingSection = () => {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
        }}
      >
        <Text
          style={{
            marginHorizontal: SIZES.padding,
            fontSize: 22,
            lineHeight: 30,
            fontWeight: "bold",
          }}
        >
          Trending Recipe
        </Text>

        <FlatList
          data={dummyData.trendingRecipes}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item, index }) => {
            return (
              <TrendingCard
                containerStyle={{
                  marginLeft: index == 0 ? SIZES.padding : 0,
                }}
                recipeItem={item}
                onPress={() => navigation.navigate("Recipe", { recipe: item })}
              />
            );
          }}
        />
      </View>
    );
  };

  const renderCategoryHeader = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 20,
          marginHorizontal: SIZES.padding,
        }}
      >
        {/* Section Title */}
        <Text
        style={{
          flex: 1,
          fontSize: 22,
          lineHeight: 30,
          fontWeight: 'bold'
        }}
        >
          Categories
        </Text>

        {/* View All */}
        <TouchableOpacity>
          <Text
          style={{
            color: COLORS.gray,
            fontSize: 14,
            lineHeight: 22
          }}
          >
            View All
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      <FlatList
        data={dummyData.categories}
        keyExtractor={(item) => `${item.id}`}
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {/* Header */}
            {renderHeader()}
            {/* Search Bar */}
            {renderSearchBar()}
            {/* See Recipe Card */}
            {renderSeeRecipeCard()}
            {/* Trending Section */}
            {renderTrendingSection()}
            {/* Category Header */}
            {renderCategoryHeader()}
          </View>
        }
        renderItem={({ item }) => {
          return (
            <CategoryCard
              categoryItem={item}
              containerStyle={{
                marginHorizontal: SIZES.padding,
              }}
              onPress={() => navigation.navigate("Recipe", { recipe: item })}
            />
          );
        }}
        ListFooterComponent={
          <View
            style={{
              marginBottom: 100,
            }}
          />
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
