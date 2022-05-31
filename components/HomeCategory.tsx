import { useNavigation, useNavigationState } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import { FlatList, Image, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "./Themed";

interface IHomesCategorory {
  category: {
    id: string;
    title: string;
    movies: { id: string; poster: string }[];
  };
}

const HomeScreen = (props: IHomesCategorory) => {
  const navigation = useNavigation();
  const onMoviePress = (movie: any) => {
    navigation.navigate("MovieDetailsScreen", { id: movie.id });
  };
  const { category } = props;
  return (
    <>
      <Text style={styles.title}>{category.title}</Text>
      <FlatList
        data={category.movies}
        renderItem={({ item }) => (
          <Pressable onPress={onMoviePress(item)}>
            <Image
              source={{
                uri: item.poster,
              }}
              style={styles.image}
            />
          </Pressable>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "600",
  },
  image: {
    width: 100,
    height: 170,
    resizeMode: "cover",
    borderRadius: 5,
    margin: 5,
  },
});
