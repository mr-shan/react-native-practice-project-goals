import { StyleSheet, Text, View, Pressable } from "react-native";

export default (props) => {
  return (
    <View style={styles.footer}>
      <View style={styles.roundedCorner}>
        <Pressable
          onPress={props.onPressHandler}
          android_ripple={{ color: "#006262" }}
          style={({ pressed }) => pressed && styles.pressed}
        >
          <Text style={styles.addNewGoalButton}>Add New Goal +</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    padding: 20,
  },
  roundedCorner: {
    borderRadius: 16,
    borderColor: "teal",
    backgroundColor: "teal",
  },
  addNewGoalButton: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    borderRadius: 16,
    paddingVertical: 16,
  },
  pressed: {
    opacity: 0.5,
    backgroundColor: "#009c9c",
  },
});
