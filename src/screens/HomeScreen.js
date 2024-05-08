import { View, Text, ScrollView, StyleSheet, Image, TextInput,TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ArchiveBoxXMarkIcon, AtSymbolIcon, BellIcon, MagnifyingGlassIcon, SparklesIcon, ViewColumnsIcon } from 'react-native-heroicons/outline';
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import Categories from '../components/categories';
import axios from 'axios';
import Recipes from '../components/recipes';
import { Dimensions } from 'react-native';
export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState('Beef');
  const [categories, setCategories] = useState([]);
  const [meals, setMeals] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  
    const toggleDropdown = () => {
      setShowDropdown(!showDropdown);
    };

    return (
    <View className="S bg-white" style={{
    }}>

      <StatusBar style="dark" />
      
        {/* avatar and bell icon */}
        <View className="" style={{
          borderBottomEndRadius: 25,
          borderBottomLeftRadius: 25,
          height: 150,
          backgroundColor: '#FFB534',
          shadowColor: '#000',
          // shadowOffset: {
          //   width: 0,
          //   height: 6,
          // },
          // shadowOpacity: 0.5,
          // shadowRadius: 3,
          // elevation: 2,
        }}>
        <View style={{ position: 'relative', flexDirection: 'row', alignItems: 'center',marginTop:50, paddingHorizontal:20,paddingVertical:10}}>
          <Image source={require('../../assets/images/welcome.png')} style={{ width: 55, height: 55, marginBottom: 2, borderRadius: 10, overflow: 'hidden', borderWidth: 0.5, borderColor: '#ffff' }} />
          <View style={{ flex: 1, flexDirection: 'column', marginLeft: 10 }}>
            <Text style={{ fontSize: hp(3.0), fontWeight: 'bold', color: 'white' }}>CATALOG</Text>
            <Text style={{ fontSize: hp(2.0), fontWeight: 'bold', color: 'white' }}>The Bites Brownis</Text>
          </View>
          <TouchableOpacity onPress={toggleDropdown}>
            <BellIcon size={hp(5)} color="white" />
          </TouchableOpacity>
        </View>
        </View>
        {/* Menu Brownis */}
        <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 50}}
        className="space-y-6 pt-14"
        >
        <View className="" style={{marginTop: hp(-1)}}>
          <Recipes meals={meals} categories={categories} />
        </View>
      </ScrollView>
      {showDropdown && (
          <View style={{ position: 'absolute', top: 60, left:20, backgroundColor: '#51829B',padding:30,maxWidth: hp('50%'), borderRadius: 10, marginTop:100, zIndex: 999 }}>
            {/* Isi dropdown dengan informasi perusahaan */}
            <Text style={{ color: 'white',fontSize:22, textAlign: 'center', textDecorationLine: 'underline', marginBottom: 10 }}>Profil Perusahaan</Text>
            <Text style={{color:'white'}}>THE BITES BROWNIS</Text>
            <Text style={{color:'white'}}>NIB : 2206230053281</Text>
            <Text style={{color:'white'}}>NPWP : 39.224.206.1-113.000</Text>
            <Text style={{color:'white', marginBottom:10}}>REKENING MANDIRI : 105.00-6000869-9</Text> 
            <Text style={{ color: 'white', marginBottom:15 }}>The Bites Brownis adalah yang bergerak di penjualan berbagai macam kue khususnya di jenis kue brownis
            </Text>
            <Text style={{ color:'white'}}>
            Jl. Haji Misba Komplek multatuli blok cc45
            </Text>
            <Text style={{color:'white'}}>
            pimpinan @The Bites Brownis
            </Text>
            {/* Tambahkan informasi lainnya sesuai kebutuhan */}
          </View>         
          )}
    </View>
  );
}