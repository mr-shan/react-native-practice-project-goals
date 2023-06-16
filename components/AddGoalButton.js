import { StyleSheet, Text, View, Pressable, Platform } from "react-native";

export default (props) => {
  const getPressableClasses = ({pressed}) => {
    const classNames = [styles.innerContainer];
    pressed && Platform.OS === "ios" && classNames.push(styles.pressed);
    return classNames;
  };

  return (
    <View style={styles.outerContainer}>
      <Pressable
        android_ripple={{ color: "#039292" }}
        onPress={props.onPressHandler}
        style={getPressableClasses}
      >
        <Text style={styles.buttonText}>Add New Goal +</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 36,
    overflow: "hidden",
    margin: 18,
    marginTop: 0,
    elevation: 4
  },
  innerContainer: {
    backgroundColor: "teal",
    paddingVertical: 12,
    elevation: 4,
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75
  }
});
