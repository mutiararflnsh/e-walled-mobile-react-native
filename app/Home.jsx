import React from "react";
import { StyleSheet, Dimensions, View, ScrollView } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import Hero from "./component/Hero";
import Control from "./component/Control";
import Profile from "./component/Profile";
import TransactionList from "./component/TransactionList";

const { height: screenHeight } = Dimensions.get("window");

function Home() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Profile />
          <Hero />
          <Control />
          <TransactionList />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
});

export default Home;
