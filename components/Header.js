import { View, StyleSheet, Text } from "react-native";

export default () => {
  return (
    <View style={styles.headerWrapper}>
      <Text fo style={styles.headerText}>Goals</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'teal',
    paddingTop: 50,
    paddingBottom: 14,
    shadowColor: '#000',

    shadowOpacity: 5
  },
  headerText: {
    fontSize: 24,
    color: "white",
    fontWeight: 'bold'
  },
});
