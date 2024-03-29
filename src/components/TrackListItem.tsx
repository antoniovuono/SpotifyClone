import { Image, StyleSheet, Text, View, Pressable } from "react-native";

import { usePlayerContext } from "../providers/PlayerProvider";
import { Track } from "../types";

type TrackListItemProps = {
  track: Track;
};

export default function TrackListItem({ track }: TrackListItemProps) {
  const { setTrack } = usePlayerContext();

  return (
    <Pressable onPress={() => setTrack(track)} style={styles.container}>
      <Image
        source={{ uri: track.album.images[0]?.url }}
        style={styles.image}
      />
      <View>
        <Text style={styles.title}>{track.name}</Text>
        <Text style={styles.subtitle}>{track.artists[0].name}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 5,
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
  },
  subtitle: {
    color: "gray",
  },
  image: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 5,
    marginRight: 10,
  },
});
