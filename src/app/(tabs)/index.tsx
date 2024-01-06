import { StyleSheet, FlatList } from "react-native";

import { tracks } from "../../../assets/data/tracks";
import { View } from "../../components/Themed";
import TrackListItem from "../../components/TrackListItem";

export default function HomeScreen() {
  return (
    <FlatList
      data={tracks}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <TrackListItem track={item} />}
      showsVerticalScrollIndicator={false}
    />
  );
}
