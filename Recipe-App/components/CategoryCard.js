import React from 'react'
import { View, TouchableOpacity, Image, Text } from 'react-native'
import { COLORS, SIZES } from '../constants'

const CategoryCard = ({ containerStyle, categoryItem, onPress }) => {
  return (
    <TouchableOpacity
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      marginTop: 10,
      borderRadius: SIZES.radius,
      backgroundColor: COLORS.gray2,
      ...containerStyle
    }}

    onPress={onPress}
    >
    {/* Image */}
      <Image
        source={categoryItem.image}
        resizeMode="cover"
        style={{
          width: 100,
          height: 100,
          borderRadius: SIZES.radius
        }}
      />
      {/* details */}

      <View
      style={{
        width: '65%',
        paddingHorizontal: 20
      }}
      >
        {/* Name */}
        <Text
        style={{
          flex: 1,
          fontSize: 22,
          lineHeight: 30,
          fontWeight: 'bold'
        }}>
          {categoryItem.name}
        </Text>

        {/* Servings */}
        <Text
        style={{
          color: COLORS.gray,
          fontSize: 14,
          lineHeight: 22
        }}
        >
          {categoryItem.duration} | {categoryItem.serving} Serving
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default CategoryCard