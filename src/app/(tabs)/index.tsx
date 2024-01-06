import { FlatList } from "react-native";

import { tracks } from "../../../assets/data/tracks";
import Player from "../../components/Player";
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
