import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { ChevronLeftIcon, ClockIcon, FireIcon } from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {  HeartIcon, Square3Stack3DIcon, UsersIcon } from 'react-native-heroicons/solid';
import catalogData from '../data/catalogData';
import { Dimensions } from 'react-native';
import {Linking} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import Animated, { FadeInDown, FadeIn } from 'react-native-reanimated';

const RecipeDetailScreen = ({ route }) => {
  const navigation = useNavigation(); // Gunakan hook useNavigation untuk mendapatkan objek navigasi
  
  const [isFavourite, setIsFavourite] = useState(false); // State untuk menangani status favorit

  if (!route.params || !route.params.recipe) {
    console.error('Parameter recipe tidak tersedia!');
    return null;
  }
  
  const { recipe } = route.params;

  if (!recipe || !recipe.id) {
    console.error('Data resep tidak lengkap atau tidak memiliki ID!');
    return null;
  }

  const selectedRecipe = catalogData.find(item => item.id === recipe.id);

  if (!selectedRecipe) {
    console.error('Resep dengan ID yang diberikan tidak ditemukan!');
    return null;
  }

  const windowHeight = Dimensions.get('window').height;

  return (
    <ScrollView
      style={{ flex: 1 }}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 30 }}
    >
      {/* Recipe image */}
      <View style={{ flex: 1 }}>
      <Image
          source={selectedRecipe.imgUrl}
          style={{ width: '100%', height: windowHeight * 0.6,borderBottomLeftRadius: 20,resizeMode:'contain', borderBottomRightRadius: 20 }}
        />
      </View>

      {/* Back button */}
      <Animated.View entering={FadeIn.delay(200).duration(1000)} className="w-full absolute flex-row justify-between items-center pt-12">
        <TouchableOpacity  onPress={()=> navigation.goBack()} className="p-2 rounded-full ml-5 bg-amber-300">
            <ChevronLeftIcon  size={hp(3.5)} strokeWidth={4.5} color="#ffff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> setIsFavourite(!isFavourite)} className="p-2 rounded-full mr-5 bg-white">
            <HeartIcon size={hp(3.5)} strokeWidth={4.5} color={isFavourite? "red": "gray"} />
        </TouchableOpacity>
      </Animated.View>

      <View className="px-4 flex justify-between space-y-4 pt-8"
      style={{marginTop: hp(-2)}}
      >
        {/* name and area */}
        <Animated.View entering={FadeInDown.duration(700).springify().damping(12)} className=" flex-row justify-between items-center ">
            <View>
                <Text style={{fontSize: hp(3)}} className="font-bold flex-1 text-neutral-700">
                {selectedRecipe.title}
                </Text>
                <Text style={{fontSize: hp(2)}} className="font-medium flex-1 text-neutral-500">
                {selectedRecipe.production}
                </Text>
            </View >
            
            <View className="mr-4">
            <Text
                style={{fontSize: hp(3), textDecorationLine: 'none', cursor: 'pointer'}}
                className="font-bold text-gray-700 bg-green-400 p-2 rounded-lg"
                onPress={() => {
                    const phoneNumber = '+6285761088663';
                    Linking.openURL(`whatsapp://send?phone=${phoneNumber}`);
                }}
            >
                <Icon name="whatsapp" size={28} color="#fff" /> 
            </Text>
            </View>
        </Animated.View>


        {/* price product */}
        <Animated.View entering={FadeInDown.duration(700).springify().damping(12)} className=" flex-row justify-between items-center ">
            <Text style={{fontSize: hp(3)}} className="font-bold flex-1 text-neutral-700">
                {/* {meal?.strMeal} */}
                Rp.{selectedRecipe.price}
            </Text>
            <Text style={{fontSize: hp(2)}} className="mr-4 text-red-600 font-bold">
                {/* {meal?.strMeal} */}
                {'Tersedia'}
            </Text>
        </Animated.View>

        {/* misc */}
        <Animated.View entering={FadeInDown.delay(100).duration(700).springify().damping(12)} className="flex-row justify-around">
                    <View className="flex rounded-full bg-amber-300 p-2">
                        <View 
                            style={{height: hp(6.5), width: hp(6.5)}}
                            className="bg-white rounded-full flex items-center justify-center"
                        >
                            <ClockIcon size={hp(4)} strokeWidth={2.5} color="#525252" />
                        </View>
                        <View className="flex items-center py-2 space-y-1">
                            <Text style={{fontSize: hp(2)}} className="font-bold text-neutral-700">
                                Durable
                            </Text>
                            <Text style={{fontSize: hp(1.3)}} className="font-bold text-neutral-700">
                                only
                            </Text>
                        </View>
                    </View>
                    <View className="flex rounded-full bg-amber-300 p-2">
                        <View 
                            style={{height: hp(6.5), width: hp(6.5)}}
                            className="bg-white rounded-full flex items-center justify-center"
                        >
                            <UsersIcon size={hp(4)} strokeWidth={2.5} color="#525252" />
                        </View>
                        <View className="flex items-center py-2 space-y-1">
                            <Text style={{fontSize: hp(1.3)}} className="font-bold text-neutral-700">
                            Wide-ranging 
                            </Text>
                            <Text style={{fontSize: hp(1.3)}} className="font-bold text-neutral-700">
                            Interests
                            </Text>
                        </View>
                    </View>
                    <View className="flex rounded-full bg-amber-300 p-2">
                        <View 
                            style={{height: hp(6.5), width: hp(6.5)}}
                            className="bg-white rounded-full flex items-center justify-center"
                        >
                            <FireIcon size={hp(4)} strokeWidth={2.5} color="#525252" />
                        </View>
                        <View className="flex items-center py-2 space-y-1">
                            <Text style={{fontSize: hp(2)}} className="font-bold text-neutral-700">
                            Always 
                            </Text>
                            <Text style={{fontSize: hp(1.3)}} className="font-bold text-neutral-700">
                            Warm
                            </Text>
                        </View>
                    </View>
                    <View className="flex rounded-full bg-amber-300 p-2">
                        <View 
                            style={{height: hp(6.5), width: hp(6.5)}}
                            className="bg-white rounded-full flex items-center justify-center"
                        >
                            <Square3Stack3DIcon size={hp(4)} strokeWidth={2.5} color="#525252" />
                        </View>
                        <View className="flex items-center py-2 space-y-1">
                            <Text style={{fontSize: hp(2)}} className="font-bold text-neutral-700">
                            Various 
                            </Text>
                            <Text style={{fontSize: hp(1.3)}} className="font-bold text-neutral-700">
                            Varieties
                            </Text>
                        </View>
                    </View>
                </Animated.View>
        {/* instructions */}
        <Animated.View entering={FadeInDown.delay(300).duration(700).springify().damping(12)} className="space-y-4">
            <Text style={{fontSize: hp(2.5)}} className="font-bold flex-1 text-neutral-700">
                Deskription
            </Text>
            <Text style={{fontSize: hp(2.0)}} className="text-neutral-700">
                {
                    selectedRecipe.description
                }
            </Text>
            <Text style={{ fontSize: 14, marginBottom: 10 }}>{selectedRecipe.technologies.join('')}</Text>
        </Animated.View>
         {/* picture */}
         <Animated.View entering={FadeInDown.delay(300).duration(700).springify().damping(12)} className="space-y-4">
         <Text style={{fontSize: hp(2.5)}} className="font-bold flex-1 text-neutral-700">
                        More Picture
                    </Text>
                    <View className="flex-column">
                    <Animated.Image
                        source={selectedRecipe.imgUrl}
                        style={{
                            width: wp(30),
                            height: hp(20),
                            margin: 4,
                            marginTop: 2,
                            resizeMode: 'contain'
                        }}
                    />
                    <Animated.Image
                        source={selectedRecipe.images}
                        style={{
                            width: wp(92),
                            height: hp(30),
                            marginTop: 2,
                            // resizeMode: 'contain'
                        }}
                    />
                    <Animated.Image
                        source={selectedRecipe.images2}
                        style={{
                            width: wp(92),
                            height: hp(30),
                            marginTop: 2,
                            resizeMode: 'contain' 
                        }}
                    />

                </View>

                </Animated.View>
      </View>
    </ScrollView>
  );
};

export default RecipeDetailScreen;
