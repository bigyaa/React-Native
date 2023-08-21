import { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";
import { Popularjobs, Nearbyjobs, Welcome, ScreenHeaderBtn } from "../components"
import { COLORS, icons, images, SIZES } from "../constants"

const Home = () => {
    return (
        // <View>
        //     <Text>Home</Text>
        // </View>
        <SafeAreaView style={{flex:1, backgroundColor:COLORS.white}}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
                    ),
                    headerTitle: "",
                }} />
            <ScrollView showsVerticalScrollIndicator={false}> 
                <View
                style={{
                    flex: 1,
                    padding: SIZES.medium,
                }}>
                    <Welcome />
                    <Popularjobs />
                    <Nearbyjobs />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;