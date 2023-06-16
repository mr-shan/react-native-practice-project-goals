import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Alert } from "react-native";
import { useState } from "react";

import Header from "./components/Header";
import NewGoalModal from "./components/NewGoalModal";
import GoalsList from "./components/GoalsList";
import AddGoalButton from "./components/AddGoalButton";

export default function App() {
  const [modalState, setModalState] = useState(false);
  const [goals, setGoals] = useState([]);

  const addNewGoal = (goal) => {
    setGoals((oldGoals) => [
      ...oldGoals,
      { key: Math.random().toString(), text: goal },
    ]);
  };

  const removeGoalHandler = (goalId) => {
    Alert.alert(
      "Confirm delete?",
      "Are you sure you want to delete this goal?",
      [
        {
          text: "Cancel",
          onPress: () => {},
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () =>
            setGoals((goals) => goals.filter((e) => e.key !== goalId)),
        },
      ]
    );
  };

  return (
    <View style={styles.main}>
      <StatusBar style="light" />
      <Header />
      <View style={styles.container}>
        {goals.length === 0 && (
          <View style={styles.noGoalsFoundWrapper}>
            <Text style={styles.noGoalsFound}>
              Start adding new Goals from button below.
            </Text>
          </View>
        )}
        <GoalsList data={goals} onRemoveGoal={removeGoalHandler} />
      </View>

      <AddGoalButton onPressHandler={() => setModalState(true)} />

      <NewGoalModal
        modalState={modalState}
        onCloseModal={() => setModalState(false)}
        onAddGoal={addNewGoal}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1
  },
  noGoalsFoundWrapper: {
    height: "100%",
    justifyContent: "center",
  },
  noGoalsFound: {
    textAlign: "center",
    fontSize: 16,
    color: "#666",
  },
});
