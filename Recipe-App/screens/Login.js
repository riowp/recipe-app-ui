import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomButton } from "../components";
import { COLORS, FONTS, SIZES, images } from "../constants";
import { LinearGradient } from "expo-linear-gradient";
const Login = ({ navigation }) => {
  const renderHeader = () => {
    return (
      <View
        style={{
          height: SIZES.height > 700 ? "65%" : "60%",
        }}
      >
        <ImageBackground
          source={images.loginBackground}
          style={{
            flex: 1,
            justifyContent: "flex-end",
          }}
          resizeMode="cover"
        >
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={[COLORS.transparent, COLORS.black]}
            style={{
              height: 200,
              justifyContent: "flex-end",
              paddingHorizontal: SIZES.padding,
            }}
          >
            <Text
              style={{
                width: "80%",
                color: COLORS.white,
                fontSize: 40,
                fontWeight: "bold",
                lineHeight: 45,
              }}
            >
              Cooking a Deicious Food Easily
            </Text>
          </LinearGradient>
        </ImageBackground>
      </View>
    );
  };

  const renderDetail = () => {
    return (
      <View
        style={{
          flex: 1,
          paddingHorizontal: SIZES.padding,
        }}
      >
        {/* Description */}
        <Text
          style={{
            marginTop: SIZES.radius,
            width: "70%",
            color: COLORS.gray,
            fontSize: 16,
            lineHeight: 22,
          }}
        >
          Discover more than 1200 food recipes in your hands and cooking it
          easyly!
        </Text>
        {/* Buttons */}
        <View
          style={{
            flex: 1,
            justifyContent: "center",
          }}
        >
          {/* Login */}

          <CustomButton
            buttonText="Login"
            colors={[COLORS.darkGreen, COLORS.lime]}
            buttonContainerStyle={{
              paddingVertical: 18,
              borderRadius: 20
            }}
            onPress={() => navigation.replace("Home")}
          />
          {/* SignUp */}
          <CustomButton
            buttonText="Sign Up"
            buttonContainerStyle={{
              marginTop: SIZES.radius,
              paddingVertical: 18,
              borderRadius: 20,
              borderColor: COLORS.darkLime,
              borderWidth: 1
            }}
            colors={[]}
            onPress={() => replace("Home")}
          />
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.black,
      }}
    >
      {/* Header */}
      {renderHeader()}

      {/* Detail */}
      {renderDetail()}
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

export default Login;
