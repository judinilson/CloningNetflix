import { View, Text, Image, SafeAreaView, Pressable } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import movie from "../../assets/data/movies";
import {
  AntDesign,
  Entypo,
  Feather,
  FontAwesome,
  MaterialIcons,
} from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";

const firstEpisode = movie.seasons.items[0].episodes.items[0];

const MoviesDetailsScreen = () => {
  const [country, setCountry] = useState("Unknown");
  return (
    <SafeAreaView>
      <Image style={styles.image} source={{ uri: firstEpisode.poster }} />
      <Text style={styles.title}>{movie.title}</Text>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.match}>98% match</Text>
        <Text style={styles.year}>{movie.year}</Text>
        <View style={styles.ageContainer}>
          <Text style={styles.age}>12+</Text>
        </View>
        <Text style={styles.year}>{movie.numberOfSeasons} Seasons</Text>
        <MaterialIcons name="hd" size={24} color="white" />
      </View>
      {/* Play Button */}
      <Pressable
        onPress={() => {
          console.warn("Plage");
        }}
        style={styles.playButton}
      >
        <Text style={styles.playButtonText}>
          <Entypo name="controller-play" size={16} color="black" />
          Play
        </Text>
      </Pressable>

      {/* Download Button */}
      <Pressable
        onPress={() => {
          console.warn("Download");
        }}
        style={styles.downloadButton}
      >
        <Text style={styles.downloadButtonText}>
          <AntDesign name="download" size={16} color="white" /> Download
        </Text>
      </Pressable>
      {/* Cast */}
      <Text style={{ marginVertical: 10, color: "white" }}>{movie.plot}</Text>
      <Text style={styles.year}>Cast: {movie.cast}</Text>
      <Text style={styles.year}>Creator: {movie.creator}</Text>
      {/* Row with icon buttons */}
      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <View style={{ alignItems: "center", marginHorizontal: 20 }}>
          <AntDesign name="plus" size={24} color={"white"} />
          <Text style={{ color: "darkgrey", marginTop: 5 }}>My List</Text>
        </View>

        <View style={{ alignItems: "center", marginHorizontal: 20 }}>
          <Feather name="thumbs-up" size={24} color="white" />
          <Text style={{ color: "darkgrey", marginTop: 5 }}>Rate</Text>
        </View>

        <View style={{ alignItems: "center", marginHorizontal: 20 }}>
          <FontAwesome name="send-o" size={24} color="white" />
          <Text style={{ color: "darkgrey", marginTop: 5 }}>Share</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MoviesDetailsScreen;
