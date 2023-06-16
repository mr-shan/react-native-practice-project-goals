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
    margin: 18,
    marginTop: 12,
    overflow: "hidden",
  },
  innerContainer: {
    borderRadius: 36,
    backgroundColor: "teal",
    paddingVertical: 12,
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 }
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
