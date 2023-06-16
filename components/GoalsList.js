import { FlatList, View, Text, StyleSheet, Pressable } from "react-native";

export default (props) => {
  const removeGoal = (id) => {
    props.onRemoveGoal(id);
  };
  const ListItem = (props) => {
    return (
      <Pressable
        style={styles.listItem}
        android_ripple={{color: '#ccc'}}
        onPress={removeGoal.bind(this, props.item.key)}
      >
        <Text style={styles.listTitle}>{props.item.text}</Text>
      </Pressable>
    );
  };

  return (
    <FlatList
      style={styles.listContainer}
      data={props.data}
      renderItem={ListItem}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 14,
  },
  listItem: {
    backgroundColor: "#eee",
    borderColor: "#d8d8d8",
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 10,
    overflow: 'hidden'
  },
  listTitle: {
    color: "#333",
    fontSize: 18,
  },
  list: {
    flex: 1,
  },
});
