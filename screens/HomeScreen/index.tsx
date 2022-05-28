import { SafeAreaView } from "react-native-safe-area-context";
import HomeCategory from "../../components/HomeCategory";
import styles from "./styles";
import categories from "../../assets/data/categories";
import React from "react";
import { FlatList } from "react-native";
const firstCategory = categories.items[0];

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* list of categories */}
      <FlatList
        data={categories.items}
        renderItem={({ item }) => <HomeCategory category={item} />}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
