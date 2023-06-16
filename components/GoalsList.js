import { FlatList, View, Text, StyleSheet } from "react-native";

export default (props) => {
  const removeGoal = id => {
    props.onRemoveGoal(id)
  }
  const ListItem = (props) => {
    return (
      <View style={styles.listItem}>
        <Text style={styles.listTitle} onPress={removeGoal.bind(this, props.item.key)}>{props.item.text}</Text>
      </View>
    );
  };

  return (
    <FlatList
      style={styles.listContainer}
      data={props.data}
      renderItem={ListItem}
    />
  )
};

const styles = StyleSheet.create({
  listContainer: {
    paddingTop: 12,
    height: '100%'
  },
  listItem: {
    backgroundColor: "#eee",
    borderColor: "#999",
    borderWidth: 2,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  listTitle: {
    color: "#333",
    fontSize: 18
  },
  list: {
    flex: 1,
  },
});
