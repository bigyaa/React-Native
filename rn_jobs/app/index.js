import { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";
import { Popularjobs, Nearbyjobs, Welcome } from "../components"

const Home = () => {
    return (
        // <View>
        //     <Text>Home</Text>
        // </View>
        <SafeAreaView>
            <Stack.Screen />
            <ScrollView>
                <View>
                    <Welcome />
                    <Popularjobs />
                    <Nearbyjobs />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;