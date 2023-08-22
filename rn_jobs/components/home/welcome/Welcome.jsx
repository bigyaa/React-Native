import React from 'react'
import { View, Text, TextInput, Image, FlatList, TouchableOpacity } from 'react-native'

import styles from './welcome.style'
import { icons, SIZES } from '../../../constants'
import { useRouter } from 'expo-router'

const Welcome = () => {
  const router = useRouter();

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hi</Text>
        <Text style={styles.welcomeMessage}>Welcome!!</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput style={styles.searchInput} value="" onChange={() => { }} placeholder='What are you looking for?' />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={() => { }}>
          <Image source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Welcome