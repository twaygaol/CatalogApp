import React from 'react';
import { View, Text, ScrollView,Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Animated, { FadeInDown } from 'react-native-reanimated';

// Import gambar-gambar kategori secara manual
const categoryImages = [
  require('../images/cake/13.png'),
  // Tambahkan path gambar lainnya di sini sesuai kebutuhan
];

export default function Categories({ activeCategory, handleChangeCategory }) {
  return (
    <Animated.View entering={FadeInDown.duration(500).springify()}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {categoryImages.map((image, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleChangeCategory(image)} // Anda dapat mengirimkan gambar sebagai parameter
            style={{
              marginRight: 10,
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 20,
            }}
          >
            <Image
              source={image}
              style={{
                width: 100, // Sesuaikan lebar gambar
                height: 50, // Sesuaikan tinggi gambar
                // Tambahkan tintColor atau properti lainnya sesuai kebutuhan
              }}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </Animated.View>
  );
}

