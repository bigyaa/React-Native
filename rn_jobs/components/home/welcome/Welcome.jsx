import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'

import { useRouter } from 'expo-router'
import { FlatList } from 'react-native-web'
import { icons, SIZES } from '../../../constants'
import styles from './welcome.style'

const Welcome = () => {
  const router = useRouter();
  const jobTypes = ['full-time', 'part-time', 'contractor']
  const [activeJobType, setActiveJobType] = useState('full-time')

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

      <View style={styles.tabsContainer}>
        <FlatList data={jobTypes} renderItem={({ item }) =>
        (
          <TouchableOpacity style={styles.tab(activeJobType, item)}
            onPress={() => {
              setActiveJobType(item);
              router.push('/search/${item}');
            }} >
            <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
          </TouchableOpacity>
        )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View >
  )
}

export default Welcome