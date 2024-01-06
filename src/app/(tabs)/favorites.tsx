import { FlatList } from "react-native";

import { tracks } from "../../../assets/data/tracks";
import TrackListItem from "../../components/TrackListItem";

export default function FavoritesScreen() {
  return (
    <FlatList
      data={tracks}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <TrackListItem track={item} />}
      showsVerticalScrollIndicator={false}
    />
  );
}
