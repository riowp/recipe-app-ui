import React from "react";
import { View, Image, Text } from "react-native";
import { COLORS } from "../constants";

const Viewers = ({ viewersList }) => {
  if (viewersList?.length == 0) {
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: COLORS.lightGray2,
            fontSize: 14,
            lineHeight: 22,
          }}
        >
          Be the first one to try this
        </Text>
      </View>
    );
  } else if (viewersList?.length <= 4) {
    return (
      <View>
        {/* Profile */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            marginBottom: 10,
          }}
        >
          {viewersList?.map((item, index) => (
            <View
              key={index}
              style={{
                height: 50,
                width: 50,
                marginLeft: index == 0 ? 0 : -20,
              }}
            >
              <Image
                source={item.profilePic}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                }}
              />
            </View>
          ))}
        </View>

        {/* Text */}
        <Text
          style={{
            color: COLORS.lightGray2,
            textAlign: "right",
            fontSize: 14,
            lineHeight: 22,
          }}
        >
          {viewersList?.length} people
        </Text>
        <Text
          style={{
            color: COLORS.lightGray2,
            textAlign: "right",
            fontSize: 14,
            lineHeight: 18,
          }}
        >
          {" "}
          Already try this!{" "}
        </Text>
      </View>
    );
  } else {
    return (
      <View>
        {/* Profile */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          {viewersList?.map((item, index) => {
            if (index <= 2) {
              return (
                <View
                  key={index}
                  style={{
                    height: 50,
                    width: 50,
                    marginLeft: index == 0 ? 0 : -20,
                  }}
                >
                  <Image
                    source={item.profilePic}
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 25,
                    }}
                  />
                </View>
              );
            }
            if (index == 3) {
              return (
                <View
                  key={index}
                  style={{
                    height: 50,
                    width: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: -20,
                    borderRadius: 25,
                    backgroundColor: COLORS.darkGreen,
                  }}
                >
                  <Text
                    atyle={{
                      color: COLORS.white,
                      fontSize: 14,
                      lineHeight: 22,
                    }}
                  >
                    {viewersList?.length - 3}+
                  </Text>
                </View>
              );
            }
          })}
        </View>
        {/* Text */}
        <Text
          style={{
            color: COLORS.lightGray2,
            textAlign: "right",
            fontSize: 14,
            lineHeight: 22,
          }}
        >
          {viewersList?.length} people
        </Text>
        <Text
          style={{
            color: COLORS.lightGray2,
            textAlign: "right",
            fontSize: 14,
            lineHeight: 18,
          }}
        >
          {" "}
          Already try this!{" "}
        </Text>
      </View>
    );
  }
};

export default Viewers;
